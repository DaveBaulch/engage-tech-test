import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const categoryModule = {
  state: () => ({
    categorys: [
      { id: 1, categoryId: 'cats', title: 'Cats', image: 'logo.svg' },
      { id: 2, categoryId: 'dogs', title: 'Dogs', image: 'logo.svg' },
      { id: 3, categoryId: 'birds', title: 'Birds', image: 'logo.svg' },
      { id: 4, categoryId: 'rabbits', title: 'Rabbits', image: 'logo.svg' },
      { id: 5, categoryId: 'rodents', title: 'Rodents', image: 'logo.svg' }
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
        categoryId: 'cats',
        name: 'Fluffy',
        type: 'Abyssinian cat',
        age: '2 years old',
        location: '3.6km',
        image: 'https://placekitten.com/200/300?image=1',
        ownerName: 'Will Blackmore',
        ownerImage: 'dave_250.png',
        ownerType: 'Owner',
        ownerDate: '14th Apr 2021',
        ownerDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
      },
      {
        id: 2,
        categoryId: 'cats',
        name: 'Big ears',
        type: 'Abyssinian cat',
        age: '1.5 years old',
        location: '7.8km',
        image: 'https://placekitten.com/200/300?image=2',
        ownerName: 'Dave Baulch',
        ownerImage: 'dave_250.png',
        ownerType: 'Owner',
        ownerDate: '14th Jan 2020',
        ownerDescription:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua./<p>'
      }
    ]
  }),
  mutations: {},
  actions: {},
  getters: {
    getCategoryItems: (state) => (categoryId) => {
      return state.items.filter((item) => item.categoryId === categoryId);
    },
    getCategoryItemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    }
  }
};

export default new Vuex.Store({
  modules: {
    categorys: categoryModule,
    items: itemModule
  }
});
