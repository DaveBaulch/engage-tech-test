import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const categoryModule = {
  state: () => ({
    categorys: [
      // {
      //   id: 1,
      //   categoryId: "cats",
      //   title: "Cats",
      //   image: "icon-cat",
      //   icon: "IconCat",
      // },
      // {
      //   id: 2,
      //   categoryId: "dogs",
      //   title: "Dogs",
      //   image: "icon-cat",
      //   icon: "IconCat",
      // },
      // {
      //   id: 3,
      //   categoryId: "birds",
      //   title: "Birds",
      //   image: "icon-cat",
      //   icon: "IconCat",
      // },
      // {
      //   id: 4,
      //   categoryId: "rabbits",
      //   title: "Rabbits",
      //   image: "icon-cat",
      //   icon: "IconCat",
      // },
      // {
      //   id: 5,
      //   categoryId: "rodents",
      //   title: "Rodents",
      //   image: "icon-cat",
      //   icon: "IconCat",
      // },
    ],
  }),
  mutations: {
    updateCategorys: (state, data) => {
      state.categorys = data;
    },
  },
  actions: {
    setCategorys: ({ commit }, data) => {
      commit("updateCategorys", data.categorys);
    },
  },
  getters: {
    getCategorys: (state) => {
      return state.categorys;
    },
  },
};

const itemModule = {
  state: () => ({
    items: [

    ],
  }),
  mutations: {
    updateItems: (state, data) => {
      state.items = data;
    },
  },
  actions: {
    setItems: ({ commit }, data) => {
      commit("updateItems", data.items);
    },
  },
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
