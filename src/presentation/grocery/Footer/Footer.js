import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import useCategories from 'hooks/useCategories';
import { useRoute } from 'vue-router';

export default {
  name: 'Footer',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });
    const { categories } = useCategories({
      rootOnly: ref(true),
      sort: ref(['orderHint asc']),
    });
    const route = useRoute();
    const isActive = (slug) =>
      slug === route.params.categorySlug;
    return { t, categories, isActive };
  },
};
