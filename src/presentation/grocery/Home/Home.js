import { useI18n } from 'vue-i18n';
import Banner from 'presentation/Banner/Banner.vue';
import BaseMoney from 'presentation/components/BaseMoney/BaseMoney.vue';
import Icons from 'presentation/Icons/Icons.vue';
import { useRouter } from 'vue-router';
import store from '../../../store';


export default {
  name: 'Home',
  components: { Banner, BaseMoney, Icons },

  setup() {
    const customer = store.state.customer
    const customerGroup = customer?.customerGroupRef?.customerGroupId === '33cb7626-44eb-4682-b29c-3afabe6f3900' ? 'Loyalty' : 'Customer'
    
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
      customer,
      customerGroup
    };

  },

  methods: { 
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },

  computed: {
    customer () {
      return store.state.customer
    }
  }
};
