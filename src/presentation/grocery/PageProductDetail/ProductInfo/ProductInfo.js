import VariantSelector from './VariantSelector/VariantSelector.vue';
import BasePrice from 'presentation/components/BasePrice/BasePrice.vue';
import AddToCartForm from './AddToCartForm/AddToCartForm.vue';
import DetailsSection from './DetailsSection/DetailsSection.vue';
import ProductGallery from './ProductGallery/ProductGallery.vue';
import VariableWeightSelector from './VariableWeightSelector/VariableWeightSelector.vue';
import VariantNotes from './VariantNotes/VariantNotes.vue';
import useMyProduct from '../../../../../composition/useProduct';
import DiscountTag from 'presentation/components/DiscountTag/DiscountTag.vue';

export default {
  name: 'ProductInfo',
  props: {
    sku: {
      type: String,
      required: true,
    },
    currentVariant: {
      type: Object,
      required: true,
    },
    allVariants: {
      type: Array,
      required: true,
    },
    productType: {
      required: true
    },
    productDescription: {
      type: String
    },
    discount: {
      type: Object,
      required: false,
    },
  },
  setup(props, { emit }) {
    //@todo: implement open shopping list
    const { product } = useMyProduct({
      sku: props.sku,
      country: 'PT'
    });
    const openAddToShoppingList = () => {
      emit('open-add-shopping-list', {
        slug: props.currentVariant.slug,
        sku: props.currentVariant.sku,
      });
    };
    return { openAddToShoppingList, product };
  },
  components: {
    DetailsSection,
    ProductGallery,
    // SocialMediaLinks,
    AddToCartForm,
    BasePrice,
    VariantSelector,
    VariableWeightSelector,
    VariantNotes,
    DiscountTag,
  },
};
