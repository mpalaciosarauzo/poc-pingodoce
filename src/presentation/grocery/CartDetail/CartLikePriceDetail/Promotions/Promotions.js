import { useI18n } from 'vue-i18n';

export default {
    props: {
        promotionsCodes: {
            required: true
        }
    },
    setup() {
        const { t } = useI18n();
        return { t };
    },
};