import Spinner from 'presentation/components/Spinner/Spinner.vue';
import PromosList from './PromosList/PromosList.vue';
import { useI18n } from 'vue-i18n';
import useCustomerTools from 'hooks/useCustomerTools';
import { computed } from 'vue';

export default {
    components: {
        Spinner,
        PromosList,
    },
    setup() {
        const { t } = useI18n();
        const tools = useCustomerTools();
        const { customFields, loading } = tools.useCustomFieldsCustomer();

        const customFieldsNotEmpty = computed(() => {
            return Boolean(customFields.value);
        });

        const idsPromos = computed(() => {
            if (customFieldsNotEmpty.value) {
                const activePromos = customFields.value.find((field) => field.name === "promocionesActivas")?.value;
                return activePromos?.split(";");
            }
            return [];
        });

        return {
            t,
            loading,
            customFieldsNotEmpty,
            idsPromos,
        };
    },
};