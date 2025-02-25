import org, {
  createDiscountCode,
  // updateLoyaltyFields,
  usePaymentMutation,
} from './ct/useCartMutation';
import useCurrency from './useCurrency';
import useLocation from './useLocation';
import {
  addLineItem,
  addLineItemById,
  setLineItemPrice,
  changeCartLineItemQuantity,
  removeLineItem,
  addDiscountCode,
  removeDiscountCode,
  setShippingMethod,
  setBillingAddress,
  setShippingAddress,
  createMyOrderFromCart,
  updateDeliveryDate,
} from './ct/useCartMutation';
import useSelectedChannel from './useSelectedChannel';
import { getValue } from '../src/lib';
import { apolloClient, cache } from '../src/apollo';
import useAccessRules from './useAccessRules';
import basic from './ct/useCustomerTools';
import store from '../src/store'
export {
  addLineItem,
  addLineItemById,
  changeCartLineItemQuantity,
  removeLineItem,
  addDiscountCode,
  removeDiscountCode,
  setShippingMethod,
  setBillingAddress,
  setShippingAddress,
  createMyOrderFromCart
};
const useCartMutation = () => {
  const { location } = useLocation();
  const currency = useCurrency();
  return org({ location, currency });
};

export default useCartMutation;

export const randomNumber = () => {
  return (Math.random() * (0.900000 - 0.100000) + 0.100000).toFixed(6);
}
export const useCartActions = () => {
  const { location } = useLocation();
  const { channel } = useSelectedChannel();
  const currency = useCurrency();
  const { createPayment } = useAccessRules();
  const debounce = (fn, time = 200) => {
    const current = {};
    const check = { current };
    return (...args) => {
      const current = {};
      check.current = current;
      setTimeout(() => {
        if (check.current === current) {
          fn(...args);
        }
      }, time);
    };
  };
  const { error, mutateCart, mutateUpdateCart } = useCartMutation();
  const changeLine = debounce(
    (lineItemId, quantity = 1) => {
      if (!quantity || quantity < 0) {
        return;
      }
      mutateCart(
        changeCartLineItemQuantity(lineItemId, quantity)
      );
    }
  );
  const remove = (lineItemId) => {
    mutateCart(removeLineItem(lineItemId));
  };
  const addLine = (sku, quantity, setVariablePrice) =>
    mutateCart(
      addLineItem(sku, quantity, channel.value?.id), setVariablePrice
    );


  const addLineById = (arrayProductId, quantity, setVariablePrice) => {

    var updateActions = [];
    arrayProductId.forEach(function (id) {
      updateActions.push({
        addLineItem: {
          productId:id,
          quantity:quantity
        }
      });
    }); 
    
    mutateCart(
      updateActions, setVariablePrice
    );

  }
    
    

  const setLIPrice = (lineItemId, weightFinalQtyPrice, version, id) => 
    mutateUpdateCart(setLineItemPrice(lineItemId, weightFinalQtyPrice), version, id);
  const applyDiscount = (code) =>
    mutateCart(addDiscountCode(code));
  const removeDiscount = (codeId) =>
    mutateCart(removeDiscountCode(codeId));
  const setShip = (shippingMethodId) =>
    mutateCart(setShippingMethod(shippingMethodId));

  const setBilling = (address) =>
    mutateCart(setBillingAddress(address));

  const setShipping = (address) =>
    mutateCart(setShippingAddress(address));


  const updateDelDate = (deliveryDate, id, version) =>  updateDeliveryDate(deliveryDate, id, version);
  const createMyOrder = ({
    billingAddress,
    shippingAddress,
    cart,
    paymentMethod,
  }) => {
    return Promise.resolve()
      .then(() => {
        if (createPayment.value) {
          const createPayment = usePaymentMutation({
            currency: currency.value,
            centAmount: cart.value?.totalPrice?.centAmount,
            method: paymentMethod.value,
          });
          return createPayment();
        }
        return { id: false };
      })
      .then(({ id }) => {
        const actions = [
          setBillingAddress({
            ...getValue(billingAddress),
            country: location.value,
          }),
          setShippingAddress({
            ...(getValue(shippingAddress) ||
              getValue(billingAddress)),
            country: location.value,
          }),
        ];
        if (id) {
          actions.push({
            addPayment: {
              payment: {
                typeId: 'payment',
                id,
              },
            },
          });
        }
        return mutateCart(actions)
          .then(({ data }) => {
            const { id, version } = data.updateMyCart;
            return apolloClient.mutate(
              createMyOrderFromCart(id, version)
            );
          })
          .then((data) => {
            localStorage.setItem("orderId", data.data.createMyOrderFromCart.orderId);
            console.log(JSON.stringify(data.data.createMyOrderFromCart));
            const orderTotal = data?.data?.createMyOrderFromCart?.totalPrice?.centAmount - (data?.data?.createMyOrderFromCart?.shippingInfo?.price?.centAmount || 0);
            console.log(orderTotal);
            const discountRandomCode = Math.random().toString(36).slice(2);

            //const customer=JSON.parse(localStorage.getItem("CUSTOMER"));
            const customer = store.state.customer;            
            if(customer){
              basic
              .refreshUser().
              then((result) =>
                { 
                  var loyaltyPoints = 0;
                  if(result.data.me.customer.custom){
                    loyaltyPoints = result.data.me.customer.custom.customFieldsRaw.find((field) => field.name === "loyalty_points")?.value
                  }
                  const updatedloyaltyPoints = (loyaltyPoints + (orderTotal/100)).toString();

                  const discountValue = Math.ceil(Number(updatedloyaltyPoints));
                  console.log('DPS discountValue: ' + discountValue + ' ' + updatedloyaltyPoints);
                  const discountDraft = 
                  {"isActive": true,
                    "requiresDiscountCode": true,
                    "sortOrder": randomNumber(),
                    "target": {"lineItems": {
                      "predicate": "1 = 1"
                    }},
                    "name": {
                      "locale": "en",
                      "value": "TestDisc"
                    },
                    "cartPredicate": "1 = 1",
                    "value": 
                    { "absolute": 
                      {"money": 
                        {
                          "currencyCode": "EUR", 
                          "centAmount": discountValue
                        }
                      }
                  }};

                  createDiscountCode(apolloClient, discountDraft, discountRandomCode);
                  // localStorage.setItem("discountCode",discountRandomCode);
                  store.dispatch('setDiscount', discountRandomCode);

                  // updateLoyaltyFields(apolloClient, customer.customerId, result.data.me.customer.version, updatedloyaltyPoints);
                }
              );
            }
            cache.evict({ id: 'activeCart' });
            cache.gc();
          });
      });
  };

  return {
    error,
    changeLine,
    removeLineItem: remove,
    applyDiscount,
    removeDiscount,
    addLine,
    addLineById,
    setLIPrice,
    setShippingMethod: setShip,
    setBillingAddress: setBilling,
    setShippingAddress: setShipping,
    createMyOrderFromCart: createMyOrder,
    updateDeliveryDate: updateDelDate
  };
};
