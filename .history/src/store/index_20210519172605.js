import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const categoryModule = {
  state: () => ({
    categorys: [
      { id: 1, title: 'Cats', image: 'logo.svg' },
      { id: 2, title: 'Dogs', image: 'logo.svg' },
      { id: 3, title: 'Birds', image: 'logo.svg' },
      { id: 2, title: 'Rabbits', image: 'logo.svg' },
      { id: 3, title: 'Rodents', image: 'logo.svg' }
    ]
  }),
  mutations: {},
  actions: {},
  getters: {}
};

const itemModule = {
  state: () => ({
    items: [
      { id: 1, name: 'Fluffy', price: 500.01, inventory: 2 },
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
