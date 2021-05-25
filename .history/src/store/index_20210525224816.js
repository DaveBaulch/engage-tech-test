import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const categoryModule = {
  state: () => ({
    categorys: [
      { id: 1, categoryId: "cats", title: "Cats", image: "icon-cat", icon: "IconCat" },
      { id: 2, categoryId: "dogs", title: "Dogs", image: "icon-cat", icon: "IconCat" },
      { id: 3, categoryId: "birds", title: "Birds", image: "icon-cat", icon: "IconCat" },
      { id: 4, categoryId: "rabbits", title: "Rabbits", image: "icon-cat", icon: "IconCat"},
      { id: 5, categoryId: "rodents", title: "Rodents", image: "icon-cat" },
    ],
  }),
  mutations: {},
  actions: {},
  getters: {
    getCategorys: (state) => {
      return state.categorys;
    },
  },
};

const itemModule = {
  state: () => ({
    items: [
      {
        id: 1,
        categoryId: "cats",
        name: "Fluffy",
        type: "Abyssinian cat",
        age: "2 years old",
        location: "3.6km",
        image: "https://placekitten.com/150/260?image=1",
        imageLarge: "https://placekitten.com/320/320?image=1",
        ownerName: "Will Blackmore",
        ownerImage: "dave_250.png",
        ownerType: "Owner",
        ownerDate: "14th Apr 2021",
        ownerDescription:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      },
      {
        id: 2,
        categoryId: "cats",
        name: "Big ears",
        type: "Abyssinian cat",
        age: "1.5 years old",
        location: "7.8km",
        image: "https://placekitten.com/150/260?image=2",
        imageLarge: "https://placekitten.com/320/320?image=2",
        ownerName: "Dave Baulch",
        ownerImage: "dave_250.png",
        ownerType: "Owner",
        ownerDate: "14th Jan 2020",
        ownerDescription:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua./<p>",
      },
      {
        id: 3,
        categoryId: "cats",
        name: "Fat cat",
        type: "Winter cat",
        age: "2.5 years old",
        location: "7.8km",
        image: "https://placekitten.com/150/260?image=3",
        imageLarge: "https://placekitten.com/320/320?image=3",
        ownerName: "Dave Baulch",
        ownerImage: "dave_250.png",
        ownerType: "Owner",
        ownerDate: "14th Jan 2020",
        ownerDescription:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua./<p>",
      },
    ],
  }),
  mutations: {},
  actions: {},
  getters: {
    getCategoryItems: (state) => (categoryId) => {
      return state.items.filter((item) => item.categoryId === categoryId);
    },
    getCategoryItemById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
  },
};

export default new Vuex.Store({
  modules: {
    categorys: categoryModule,
    items: itemModule,
  },
});
