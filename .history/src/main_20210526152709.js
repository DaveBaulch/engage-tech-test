import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import VueMeta from "vue-meta";
// import AnimationDirective from "./directives/animations";
import gsap from "gsap";
import "./tailwind.css";
// Vue.directive("animate", AnimationDirective);
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
