//do not need vuelidate, default method is set in setup when needed

import BaseMoney from 'presentation/components/BaseMoney/BaseMoney.vue';
import { ref, shallowRef, watch } from 'vue';
import useShippingMethods from 'hooks/useShippingMethods';
import useCartTools from 'hooks/useCartTools';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
export default {
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
  components: {
    BaseMoney,
    DatePicker
  },
  data() {
    return {
      datePickerDate: null
    }
  },
  setup(props) {
    const { total, loading, error, shippingMethods } =
      useShippingMethods();
    const selectedShippingMethod = ref(
      props.cart?.shippingInfo?.shippingMethod?.methodId
    );
    const cartTools = useCartTools();
    watch(selectedShippingMethod, (methodId) => {
      if (!methodId) {
        return;
      }
      cartTools.setShippingMethod(methodId);
    });
    watch(shippingMethods, (shippingMethods) => {
      if (
        !props.cart?.shippingInfo?.shippingMethod
          ?.methodId &&
        Boolean(shippingMethods?.length)
      ) {
        selectedShippingMethod.value = (
          shippingMethods.find(
            ({ isDefault }) => isDefault
          ) || shippingMethods[0]
        ).methodId;
      }
    });
    const setSelectedShippingMethod = (method) => {
      selectedShippingMethod.value = method;
    };
    const price = (shippingMethod) => {
      //zone rates not for this country will be filtered out by graphql
      //  shipping rates are not.
      const rate = shippingMethod?.zoneRates
        ?.flatMap(({ shippingRates }) => shippingRates)
        .find(({ isMatching }) => isMatching);
      return props.cart.totalPrice.centAmount >
        (rate?.freeAbove?.centAmount || Infinity)
        ? null
        : rate?.price;
    };

    const method = shallowRef(selectedShippingMethod);
    watch(method, (method) => {
      setSelectedShippingMethod(method);
    });

    

  const setDatePickerDate = (event) => {
    console.log ('DPSSS' + JSON.stringify(event) + " " + JSON.stringify(props.cart.cartId)+ " " + props.cart.version);
    const updateCart = cartTools.updateDeliveryDate(JSON.stringify(event), props.cart.cartId, props.cart.version);
    console.log ('DPSSS2' + JSON.stringify(updateCart));
  }


    return {
      method,
      total,
      loading,
      error,
      shippingMethods,
      price,
      selectedShippingMethod,
      setSelectedShippingMethod,
      setDatePickerDate,
    };
  },
};
