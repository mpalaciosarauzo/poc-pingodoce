import Spinner from 'presentation/components/Spinner/Spinner.vue';
import BaseDate from 'presentation/components/BaseDate/BaseDate.vue';
import { useI18n } from 'vue-i18n';
import useCustomerTools from 'hooks/useCustomerTools';
// import { computed, watch, ref } from 'vue';
import useLocale from '../../../../../composition/useLocale';
import { computed, ref } from 'vue';

export default {
    components: {
        Spinner,
        BaseDate,
    },
    setup() {
        const { t } = useI18n();
        const { locale } = useLocale();
        const tools = useCustomerTools();
        const _promos = ref([]);
        const _loading = ref(true);
        const promosListNotEmpty = ref(false);
        const { customFields } = tools.useCustomFieldsCustomer();

        const customFieldsNotEmpty = computed(() => {
            return Boolean(customFields.value);
        });

        const idsPromos = ["cbc51aab-5671-4f35-bbae-8ab319201c60", "118a88a5-1293-4c33-9276-b3b3080ec437"];
        const { promos, loading } = tools.useMyPromos({ idsPromos, locale });
            promosListNotEmpty.value = computed(() => {
                return Boolean(promos.value.length);
            });
            _loading.value = computed(() => {
                return Boolean(loading);
            });
            _promos.value = computed(() => {
                return Object.assign({}, promos);
            });

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
            _loading,
            promos,
            _promos,
            promosListNotEmpty,
            customFields,
            customFieldsNotEmpty,
        };
    },
};