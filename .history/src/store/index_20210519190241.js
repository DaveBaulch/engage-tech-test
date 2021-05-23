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
  getters: {
    getCategorys: (state) => {
      return state.categorys;
    }
  }
};

const itemModule = {
  state: () => ({
    items: [
      {
        id: 1,
        categoryId: 1,
        name: 'Fluffy',
        type: 'Abyssinian cat',
        age: '2 years old',
        location: '3.6km',
        image: 'https://placekitten.com/200/300?image=1',
        ownerName: 'Will Blackmore',
        ownerType: 'Owner',
        ownerDate: '14th Apr 2021',
        ownerDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 2,
        categoryId: 1,
        name: 'Big ears',
        type: 'Abyssinian cat',
        age: '1.5 years old',
        location: '7.8km',
        image: 'https://placekitten.com/200/300?image=2',
        ownerName: 'Dave Baulch',
        ownerType: 'Owner',
        ownerDate: '14th Jan 2020',
        ownerDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  }),
  mutations: {},
  actions: {},
  getters: {
    getCategoryItems: (state) => {
      return state.items;
    },
    getCategoryItemById: (state) => (id) => {
      console.log(id);
      return state.items.find((items) => items.id === id);
    }
  }
};

export default new Vuex.Store({
  modules: {
    categorys: categoryModule,
    items: itemModule
  }
});
