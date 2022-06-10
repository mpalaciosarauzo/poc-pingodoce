//@todo: put some of this code in a hook
// import useLocale from 'hooks/useLocale';
// import { shallowRef } from 'vue';
// import { useI18n } from 'vue-i18n';
// import { useRoute, useRouter } from 'vue-router';
// import config from '../../../../../../sunrise.config';
// import { getAttributeValue } from 'containers/lib';
// import { move } from '../../../../../lib';
import { ref } from 'vue';
import useCustomerTools from 'hooks/useCustomerTools';

export default {
  props: {
    // allVariants: {
    //   type: Array,
    //   required: true,
    // },
    sku: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const tools = useCustomerTools();
    const { product } = tools.useVariantSelector(props.sku);
    const weightSelection = ref(1000);
    const  selectedWeight = () => {
        this.$store.dispatch('setWeightQty', this.weightSelection);
    }
    return {
      product,
      weightSelection,
      selectedWeight,
    };
  },
};
