import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1,
    num: 222
}

const mutations = {
    vadd(state,n){
        state.count += n;
    },
    vreduce(state){
        state.count--;
    }
}

export default new Vuex.Store({
    state,mutations
})