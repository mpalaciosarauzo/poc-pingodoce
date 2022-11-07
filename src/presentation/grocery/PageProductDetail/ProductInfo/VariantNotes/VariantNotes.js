//@todo: put some of this code in a hook
// import useLocale from 'hooks/useLocale';
// import { shallowRef } from 'vue';
// import { useI18n } from 'vue-i18n';
// import { useRoute, useRouter } from 'vue-router';
// import config from '../../../../../../sunrise.config';
// import { getAttributeValue } from 'containers/lib';
// import { move } from '../../../../../lib';
import useCustomerTools from 'hooks/useCustomerTools';
import { useStore } from 'vuex';

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
    const store = useStore();
    const tools = useCustomerTools();
    const { product } = tools.useVariantSelector({sku: props.sku});
    const preparationNotes = "Insira notas de preparação aqui...";
    const  selectedPreparationNotes = () => {
        store.dispatch('setPreparationNotes', preparationNotes);
    }
    return {
      product,
      preparationNotes,
      selectedPreparationNotes,
    };
  },
};
