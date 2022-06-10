import { createStore } from 'vuex';

const SET_WEIGTH_QTY = 'SET_WEIGTH_QTY';

const store = createStore({
    state () {
        return {
            weightNumberQty: 0,
        }
    },
    mutations: {
        [SET_WEIGTH_QTY](state, weightNumberQty) {
            state.weightNumberQty = weightNumberQty;
        },
    }, 
});

export default store;