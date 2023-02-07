import { computed } from 'vue';
import useLocation from 'hooks/useLocation';
import useLocale from 'hooks/useLocale';

export default {
  props: {
    money: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    const { location } = useLocation();
    const { locale } = useLocale();
    const lcLoc = location.value + '-' + locale.value;
    const formatter = new Intl.NumberFormat(lcLoc, {style: 'currency', currency: props.money.currencyCode})
    const formattedMoney = computed(() => {
      return formatter.format(amount.value)
    });
    const amount = computed(() => {
      if (props?.money) {
        return (
          props.money.centAmount /
          10 ** props.money.fractionDigits
        );
      }
      return 0;
    });
    const currency = computed(() => {
      if (props?.money) {
        return props.money.currencyCode;
      }
      return '';
    });
    return { currency, amount, formattedMoney };
  },
};
