import { required, numeric } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

import { shallowRef, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import BaseForm from 'presentation/components/BaseForm/BaseForm.vue';
import BaseInput from 'presentation/components/BaseInput/BaseInput.vue';
import ServerError from 'presentation/components/ServerError/ServerError.vue';
import useCartTools from 'hooks/useCartTools';
import useProductTools from 'hooks/useProductTools';

import { useStore } from 'vuex';
function Rules() {
  this.quantity = { required, numeric };
}

export default {
  name: 'AddToCartForm',
  props: {
    sku: {
      type: String,
      required: true,
    },
    isOnStock: {
      type: Boolean,
      required: true,
    },
    availableQuantity: {
      type: Number,
      required: false,
    },
    addCaption: {
      type: String,
      default: 'addToCart',
    },
    productId: {
      required: true
    }
  },
  components: {
    BaseForm,
    ServerError,
    BaseInput,
  },
  setup(props) {
    const { t } = useI18n();
    const form = ref({ quantity: 1 });
    const rules = new Rules(form);
    const v = useVuelidate(rules, form);
    const showQuantityError = shallowRef(false);
    const { addLine, addLineById, setLIPrice } = useCartTools();

    const weightFinalQtyPrice = ref('');
    const store = useStore();
    const setVariablePrice = (response) => {
      console.log(props.productId);
      if (props.productId === 'f1a07b46-5104-4446-ba14-0289ef7e5537') {
        console.log(response);
        const itemVariableWeight = response.data.updateMyCart.lineItems[response.data.updateMyCart.lineItems.length - 1];
        const itemPrice = itemVariableWeight.price.value.centAmount;
        weightFinalQtyPrice.value = store.state.weightNumberQty / 1000 * itemPrice;
        weightFinalQtyPrice.value = Math.round(weightFinalQtyPrice.value);
        setLIPrice(itemVariableWeight.lineId, weightFinalQtyPrice.value, response.data.updateMyCart.version, response.data.updateMyCart.id);
      }
    }


    const { currentVariant } =
    useProductTools(true);

    const addLineItem = () => {
      // check if it is a recipe product type
      if (props.productId === '135944ba-fe38-4138-8a3c-a93cc8ec6a41') {
        var produtos = getProdutos(currentVariant);
        console.log(JSON.stringify(produtos));
        var arrayProductId=[];
        produtos.forEach(function (prod) {
          console.log('Agrego al carrito el productID '+prod.id);
          arrayProductId.push(prod.id);
          
        }); 
        addLineById(arrayProductId, Number(1), null);
      }
      // regular type
      else{
        addLine(props.sku, Number(form.value.quantity), setVariablePrice);
      }
      
    }
    return { t, addLineItem, v, showQuantityError };
    
  },
};

function getProdutos(currentVariant){
  var produtos = [];

  currentVariant.value.attributesRaw.forEach(function (attribute) {
    if(attribute.name==='produtos'){

      produtos=attribute.value;
      
    }
  }); 
  return produtos;
}
