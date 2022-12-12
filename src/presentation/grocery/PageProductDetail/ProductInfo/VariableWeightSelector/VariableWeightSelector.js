//@todo: put some of this code in a hook
// import useLocale from 'hooks/useLocale';
// import { shallowRef } from 'vue';
// import { useI18n } from 'vue-i18n';
// import { useRoute, useRouter } from 'vue-router';
// import config from '../../../../../../sunrise.config';
// import { getAttributeValue } from 'containers/lib';
// import { move } from '../../../../../lib';
import { computed } from 'vue';
import { ref } from 'vue';
import useCustomerTools from 'hooks/useCustomerTools';
import { useStore } from 'vuex';

export default {
  name: 'VariableWeightSelector',
  props: {
    currentVariant: {
      type: Object,
      required: true,
    },
    sku: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const store = useStore();
    const tools = useCustomerTools();
    const { product } = tools.useVariantSelector({sku: props.sku});
    const weightSelection = computed(() => {
      let weight = ref(1000);
      props.currentVariant.attributesRaw.forEach(function (attribute) {
        if(attribute.name==='weight'){
          weight =  ref(attribute.value);
        }
      });
      return weight;
    });
    const selectedWeight = () => {
        store.dispatch('setWeightQty', weightSelection.value);
    }
    return {
      product,
      weightSelection,
      selectedWeight,
    };
  },
};
