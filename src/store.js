import { createStore } from 'vuex';

const SET_WEIGTH_QTY = 'SET_WEIGTH_QTY';
const SET_PREPARATION_NOTES = 'SET_PREPARATION_NOTES';
const SET_CART = 'SET_CART';

const store = createStore({
    state () {
        return {
            weightNumberQty: 1000,
            cart: {}
        }
    },
    actions: {
        setWeightQty: ({ commit }, weightNumberQty) => {
            commit(SET_WEIGTH_QTY, weightNumberQty);
        },
        setPreparationNotes: ({ commit }, preparationNotesTA) => {
            commit(SET_PREPARATION_NOTES, preparationNotesTA);
        },
        setCart: ({ commit }, cart) => {
            commit(SET_CART, cart);
        }
    },
    mutations: {
        [SET_WEIGTH_QTY](state, weightNumberQty) {
            state.weightNumberQty = weightNumberQty;
        },
        [SET_PREPARATION_NOTES](state, preparationNotesTA) {
            state.preparationNotesTA = preparationNotesTA;
        },
        [SET_CART](state, cart) {
            state.cart = cart;
        }
    }, 
});

export default store;