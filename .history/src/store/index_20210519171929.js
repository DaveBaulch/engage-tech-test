import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const categoryModule = {
  state: () => ({ ... }),
  mutations: {=},
  actions: { ... },
  getters: { ... }
}

const itemModule = {
  state: () => ({ ... }),
  mutations: { ... },
  action

export default new Vuex.Store({
  modules: {
    categorys: categoryModule,
    items: itemModule
  }
});
