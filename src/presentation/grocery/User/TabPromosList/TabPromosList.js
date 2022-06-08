import Spinner from 'presentation/components/Spinner/Spinner.vue';
import PromosList from './PromosList/PromosList.vue';
import { useI18n } from 'vue-i18n';
import useCustomerTools from 'hooks/useCustomerTools';
// import { computed, watch, ref } from 'vue';
import { computed, ref, watch } from 'vue';

export default {
    components: {
        Spinner,
        PromosList,
    },
    setup() {
        const { t } = useI18n();
        const tools = useCustomerTools();
        const idsPromos = ref();
        const { customFields, loading } = tools.useCustomFieldsCustomer();

        const customFieldsNotEmpty = computed(() => {
            return Boolean(customFields.value);
        });

        watch(customFieldsNotEmpty, (customFieldsNotEmpty) => {
            if (customFieldsNotEmpty) {
                const activePromos = customFields.value.find((field) => field.name === "promocionesActivas")?.value;
                idsPromos.value = activePromos?.split(";");
            }
        });

        // const { promos, loading } = tools.useMyPromos({ idsPromos, locale });
        //     promosListNotEmpty.value = computed(() => {
        //         return Boolean(promos.value.length);
        //     });
        //     _loading.value = computed(() => {
        //         return Boolean(loading);
        //     });
        //     _promos.value = computed(() => {
        //         return Object.assign({}, promos);
        //     });

        // watch(customFieldsNotEmpty, (customFieldsNotEmpty) => {
        //     if (customFieldsNotEmpty) {
        //         const activePromos = customFields.value.find((field) => field.name === "promocionesActivas")?.value;
        //         const idsPromos = activePromos?.split(";");
        //         if (idsPromos) {
        //             const { promos, loading } = tools.useMyPromos({ idsPromos, locale });
        //             promosListNotEmpty.value = computed(() => {
        //                 return Boolean(promos.value.length);
        //             });
        //             _loading.value = computed(() => {
        //                 return Boolean(loading);
        //             });
        //             _promos.value = computed(() => {
        //                 return promos;
        //             });
        //         }
        //     }
        // });

        return {
            t,
            loading,
            customFieldsNotEmpty,
            idsPromos,
        };
    },
};