import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const categoryModule = {
  state: () => ({
    items
   }),
  mutations: {},
  actions: {},
  getters: {}
}

const itemModule = {
  state: () => ({}),
  mutations: {},
  actions: {},
  getters: {}
}

export default new Vuex.Store({
  modules: {
    categorys: categoryModule,
    items: itemModule
  }
});
