import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const categoryModule = {
  state: () => ({
    categorys: [
      { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
      { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
      { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
    ]
  }),
  mutations: {},
  actions: {},
  getters: {}
};

const itemModule = {
  state: () => ({
    items: [
      { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
      { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
      { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
    ]
  }),
  mutations: {},
  actions: {},
  getters: {}
};

export default new Vuex.Store({
  modules: {
    categorys: categoryModule,
    items: itemModule
  }
});
