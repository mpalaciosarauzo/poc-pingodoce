import { useI18n } from 'vue-i18n';
import BasePrice from 'presentation/components/BasePrice/BasePrice.vue';
import DiscountCodes from './DiscountCodes/DiscountCodes.vue';
import Promotions from './Promotions/Promotions.vue';
import useCartTools from 'hooks/useCartTools';
import { computed } from 'vue';

export default {
  components: {
    DiscountCodes,
    BasePrice,
    Promotions,
  },
  props: {
    cart: {
      type: Object,
      required: true,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { t } = useI18n();
    const promos = useCartTools().promotionsCodes(props.cart);
    const promotionsCodesExists = computed(() => {
      return Boolean(promos.length);
    });
    return { t, promotionsCodesExists, promos, ...useCartTools() };
  },
};
