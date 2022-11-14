import { apolloClient, cache } from '../../src/apollo';
import { getValue } from '../../src/lib';
import useMutation from '../useMutationFacade';
import useCart from '../useCart';
import gql from 'graphql-tag';
export const usePaymentMutation = ({
  currency,
  centAmount,
  method,
}) => {
  const createPayment = () => {
    return apolloClient
      .mutate({
        mutation: gql`
          mutation createPayment($draft: PaymentDraft!) {
            createPayment(draft: $draft) {
              paymentId: id
              version
            }
          }
        `,
        variables: {
          draft: {
            amountPlanned: {
              currencyCode: currency,
              centAmount,
            },
            paymentMethodInfo: {
              method,
            },
          },
        },
      })
      .then((result) => ({
        version: result.data.createPayment.version,
        id: result.data.createPayment.paymentId,
      }));
  };
  return createPayment;
};

const create = gql`
  mutation createCart($draft: MyCartDraft!) {
    createMyCart(draft: $draft) {
      cartId: id
      version
    }
  }
`;
const mutation = gql`
  mutation mutateCart(
    $actions: [MyCartUpdateAction!]!
    $version: Long!
    $id: String!
  ) {
    updateMyCart(
      actions: $actions
      version: $version
      id: $id
    ) {
      id
      version
      lineItems {
        lineId: id
        quantity
        price {
          value {
            centAmount
          }
        }
      }
    }
  }
`;

const mutationUpdateCart = gql`
  mutation mutateCart(
    $actions: [CartUpdateAction!]!
    $version: Long!
    $id: String!
  ) {
    updateCart(
      actions: $actions
      version: $version
      id: $id
    ) {
      id
      version
      lineItems {
        lineId: id
        quantity
        price {
          value {
            centAmount
          }
        }
      }
    }
  }
`;

export const addLineItem = (sku, quantity, channel) => [
  {
    addLineItem: {
      sku,
      quantity,
      ...(channel
        ? {
            distributionChannel: {
              id: channel,
              typeId: 'channel',
            },
          }
        : undefined),
    },
  },
];

export const setLineItemPrice = (lineItemId, weightFinalQtyPrice) => [
  {
    setLineItemPrice: {
      lineItemId,
      externalPrice: {
        centPrecision: {
          currencyCode: 'EUR',
          centAmount: weightFinalQtyPrice
        }
      }
    }
  }
]
export const setBillingAddress = (address) => ({
  setBillingAddress: {
    address,
  },
});
export const setShippingAddress = (address) => ({
  setShippingAddress: {
    address,
  },
});
export const createMyOrderFromCart = (id, version) => {
  return {
    variables: {
      id,
      version,
    },
    mutation: gql`
      mutation createOrder($id: String!, $version: Long!) {
        createMyOrderFromCart(
          draft: { id: $id, version: $version }
        ) {
          orderId: id
          version
          totalPrice{
            centAmount
          }
        }
      }
    `,
  };
};

export function updateLoyaltyFields (client, id, version, loyaltyPoints) {
    return client.mutate({ mutation: gql`
      mutation updateCustomerCustomFields($id: String!, $version: Long!, $loyaltyPoints: String!) {
        updateCustomer(
          version: $version
          id: $id
          actions: [
            {
              setCustomType: { typeKey:"pingo-customer-type"}
            }
            {
              setCustomField: { name: "loyalty_points", value:$loyaltyPoints}
            }
          ]
        ) {
          id
          version
        }
      }
    `,variables: {
      id, version, loyaltyPoints
    },
    })}


    export function updateDeliveryDate (deliveryDate, id, version) {
      return apolloClient.mutate({ mutation: gql`
        mutation updateCartCustomFields($id: String!, $version: Long!, $deliveryDate: String!) {
          updateCart(
            version: $version
            id: $id
            actions: [
              {
                setCustomType: { typeKey:"pingo-cart-type"}
              }
              {
                setCustomField: { name: "delivery_date", value:$deliveryDate}
              }
            ]
          ){
            id
            version
          } 
        }
      `,variables: {
        id, version, deliveryDate
      },
      }).then((result) => {         
        cache.evict({ id: 'activeCart' });
        cache.gc();
        return result});
      }


export function createDiscountCode(
  client,
  cartDiscountDraft,
  code
) {
  return client
    .mutate({
      mutation: gql`
        mutation createNewCartDiscount(
          $draft: CartDiscountDraft!
        ) {
          createCartDiscount(draft: $draft) {
            id
          }
        }
      `,
      variables: {
        draft: cartDiscountDraft,
      },
    })
    .then((response) => response.data.createCartDiscount.id)
    .then((id) =>
      client.mutate({
        mutation: gql`
          mutation createNewDiscountCode(
            $id: String!
            $code: String!
          ) {
            createDiscountCode(
              draft: {
                code: $code
                cartDiscounts: {
                  typeId: "cart-discount"
                  id: $id
                }
              }
            ) {
              id
              code
            }
          }
        `,
        variables: { code, id },
      })
    )
    .then((response) => response.data.createDiscountCode);
}


export const changeCartLineItemQuantity = (
  id,
  quantity
) => [
  {
    changeLineItemQuantity: { lineItemId: id, quantity },
  },
];
export const removeLineItem = (lineItemId) => [
  {
    removeLineItem: { lineItemId },
  },
];
export const addDiscountCode = (code) => [
  { addDiscountCode: { code } },
];
export const removeDiscountCode = (id) => [
  {
    removeDiscountCode: {
      discountCode: { id, typeId: 'discount-code' },
    },
  },
];
export const setShippingMethod = (shippingMethodId) => [
  {
    setShippingMethod: {
      shippingMethod: {
        typeId: 'shipping-method',
        id: shippingMethodId,
      },
    },
  },
];

//this is the React api useQuery(query,options)
// https://www.apollographql.com/docs/react/api/react/hooks/#function-signature
const useCartMutation = ({ location, currency }) => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(mutation);
  const [mutateUpdateCartFunction] =
    useMutation(mutationUpdateCart);
  const [createCart] = useMutation(create);
  const { cart, exist } = useCart();
  const mutateCart = (actions, callback) => {
    return Promise.resolve()
      .then(() => {
        if (!getValue(exist) === true) {
          return createCart({
            variables: {
              draft: {
                currency: getValue(currency),
                country: getValue(location),
                shippingAddress: {
                  country: getValue(location),
                },
              },
            },
          }).then((result) => ({
            version: result.data.createMyCart.version,
            id: result.data.createMyCart.cartId,
          }));
        }
        return {
          version: getValue(cart).version,
          id: getValue(cart).cartId,
        };
      })
      .then(({ version, id }) =>
        mutateFunction({
          variables: {
            actions,
            version,
            id,
          },
        })
      )
      .then((result) => {
        if (!result.data.updateMyCart.lineItems.length) {
          return apolloClient.mutate({
            mutation: gql`
              mutation deleteCart(
                $version: Long!
                $id: String!
              ) {
                deleteMyCart(version: $version, id: $id) {
                  id
                }
              }
            `,
            variables: {
              id: result.data.updateMyCart.id,
              version: result.data.updateMyCart.version,
            },
          });
        }
        if (callback) {
          callback(result);
        }
        return result;
      })
      .then((result) => {
        cache.evict({ id: 'activeCart' });
        cache.gc();
        return result;
      });
  };
  const mutateUpdateCart = (actions, version, id) => {
    return Promise.resolve()
      .then(() => 
        mutateUpdateCartFunction({
          variables: {
            actions,
            version,
            id,
          },
        })
      )
      .then((result) => {
        return result;
      })
      .then((result) => {
        cache.evict({ id: 'activeCart' });
        cache.gc();
        return result;
      });
  }
  
  return {
    mutateCart,
    mutateUpdateCart,
    data,
    loading,
    error,
  };
};

export default useCartMutation;
