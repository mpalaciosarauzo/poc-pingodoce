import ServerError from 'presentation/components/ServerError/ServerError.vue';
import BaseForm from 'presentation/components/BaseForm/BaseForm.vue';
import BaseInput from 'presentation/components/BaseInput/BaseInput.vue';

import { useI18n } from 'vue-i18n';
import useCartTools from 'hooks/useCartTools';
import useDiscountCode from 'hooks/useDiscountCode';
import useCustomerTools from 'hooks/useCustomerTools';
import store from '../../../../store';

export default {
  components: {
    BaseForm,
    BaseInput,
    ServerError,
  },
  setup() {
    const { t } = useI18n();
    const { applyDiscount: ad } = useCartTools();
    const { form, v } = useDiscountCode();
    const applyDiscount = () => ad(form.value.code);
    const getErrorMessage = ({ code }) => {
      if (code === 'DiscountCodeNonApplicable') {
        return t('nonApplicable');
      }
      return t('unknownError');
    };

    const tools = useCustomerTools();
    const discountCode = store.state.discount;
    const getLoyaltyPoints = () => {
      if (store.state.customer != null && discountCode != null) {
        const { customFields } = tools.useCustomFieldsCustomer();
        if (customFields.value != null) {
          const loyaltyPoints = customFields.value.find((field) => field.name === "loyalty_points")?.value;
          return 'Tem ' + loyaltyPoints + ' pontos de fidelização, que equivalem a ' + loyaltyPoints * 0.01 + '€ de desconto com o código: ' + discountCode;
        }
      }
      return 'Você não tem cheques';
    };

    return {
      t,
      applyDiscount,
      form,
      getErrorMessage,
      v,
      getLoyaltyPoints
    };
  },
};

