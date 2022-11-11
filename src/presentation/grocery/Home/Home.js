import { useI18n } from 'vue-i18n';
import Banner from 'presentation/Banner/Banner.vue';
import BaseMoney from 'presentation/components/BaseMoney/BaseMoney.vue';
import Icons from 'presentation/Icons/Icons.vue';
import { useRouter } from 'vue-router';
import { CUSTOMER } from '../../../constants';

const customer = JSON.parse(localStorage.getItem(CUSTOMER))
const customerGroup = customer?.customerGroupRef?.customerGroupId === '33cb7626-44eb-4682-b29c-3afabe6f3900' ? 'Loyalty' : 'Customer'

export default {
  name: 'Home',
  components: { Banner, BaseMoney, Icons },

  setup() {
    const router = useRouter();
    if (window.innerWidth < 990) {
      router.replace({
        name: 'products',
        params: { categorySlug: 'all' },
      });
    }
    const { t } = useI18n();
    return {
      t,
    };

  },

  methods: { 
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  
  data: () => ({
    customerGroup: customerGroup
  })
};
