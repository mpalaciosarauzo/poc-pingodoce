import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

const SET_WEIGTH_QTY = 'SET_WEIGTH_QTY';
const SET_PREPARATION_NOTES = 'SET_PREPARATION_NOTES';
const SET_CART = 'SET_CART';
const SET_CUSTOMER = 'SET_CUSTOMER';

const store = createStore({
    state () {
        return {
            weightNumberQty: 1000,
            cart: {}, 
            customer: null
        }
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    actions: {
        setWeightQty: ({ commit }, weightNumberQty) => {
            commit(SET_WEIGTH_QTY, weightNumberQty);
        },
        setPreparationNotes: ({ commit }, preparationNotesTA) => {
            commit(SET_PREPARATION_NOTES, preparationNotesTA);
        },
        setCart: ({ commit }, cart) => {
            commit(SET_CART, cart);
        },
        setCustomer: ({ commit }, customer) => {
            commit(SET_CUSTOMER, customer);
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
        },
        [SET_CUSTOMER](state, customer) {
            state.customer = customer;
        }
    }
});

export default store;