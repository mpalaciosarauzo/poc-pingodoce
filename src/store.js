import { createStore } from 'vuex';

const SET_WEIGTH_QTY = 'SET_WEIGTH_QTY';
const SET_CART = 'SET_CART';

const store = createStore({
    state () {
        return {
            weightNumberQty: 0,
            cart: {}
        }
    },
    actions: {
        setWeightQty: ({ commit }, weightNumberQty) => {
            commit(SET_WEIGTH_QTY, weightNumberQty);
        },
        setCart: ({ commit }, cart) => {
            commit(SET_CART, cart);
        }
    },
    mutations: {
        [SET_WEIGTH_QTY](state, weightNumberQty) {
            state.weightNumberQty = weightNumberQty;
        },
        [SET_CART](state, cart) {
            state.cart = cart;
        }
    }, 
});

export default store;