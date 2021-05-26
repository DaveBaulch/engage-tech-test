import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";
import VueMeta from "vue-meta";
import AnimationDirective from "./directives/animations";

Vue.directive("animate", AnimationDirective); //TODO

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  store,
  created() {
    const html = document.documentElement; // returns the html tag
    html.setAttribute("lang", "en");
  },
  render: (h) => h(App),
}).$mount("#app");
