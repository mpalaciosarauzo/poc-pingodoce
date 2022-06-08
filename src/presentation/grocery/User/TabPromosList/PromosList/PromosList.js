import Spinner from 'presentation/components/Spinner/Spinner.vue';
import BaseDate from 'presentation/components/BaseDate/BaseDate.vue';
import { useI18n } from 'vue-i18n';
import useCustomerTools from 'hooks/useCustomerTools';
import useLocale from '../../../../../../composition/useLocale';
import { computed } from 'vue';

export default {
    components: {
        BaseDate,
        Spinner,
    },
    props: {
        idsPromos: {
            required: true
        }
    },
    setup(props) {
        const { t } = useI18n();
        const tools = useCustomerTools();
        const { locale } = useLocale();
        const { promos, loading } = tools.useMyPromos({ idsPromos: props.idsPromos, locale });
        const promosListNotEmpty = computed(() => {
            return Boolean(promos.value.length);
        });

        return {
            promos,
            loading,
            promosListNotEmpty,
            t,
        }
    }
}