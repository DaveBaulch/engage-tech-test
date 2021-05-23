import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";
import VueMeta from "vue-meta";
import gsap from "gsap";

Vue.config.productionTip = false;
Vue.use(VueMeta);

gsap.to(".box"), {
  y: 100;
  duration: 0.3;
  stagger: {}
}

// animation types
const animations = {
  appear: {
    duration: 0.6,
    opacity: 1,
    delay: 0,
    x: 0,
    y: 0,
  },
};
animations.appearLong = { ...animations.appear, duration: 0.9 };
animations.appearLongDelay = { ...animations.appearLong, delay: 0.6 };
animations.appearShort = { ...animations.appear, duration: 0.3 };
animations.appearShortDelay = { ...animations.appear, delay: 0.3 };
animations.appearDelay = { ...animations.appear, delay: 0.6 };

// setup types
const setups = {
  hide: {
    opacity: 0,
  },
};
setups.hideLeft = { ...setups.hide, x: -40 };
setups.hideRight = { ...setups.hide, x: 40 };
setups.hideUp = { ...setups.hide, y: -40 };
setups.hideDown = { ...setups.hide, y: 40 };
setups.hideDownFar = { ...setups.hide, y: 100 };

/**
 * v-animate directive
 * v-animate:appear
 * v-animate="{duration: 1, opacity: 1}"
 * v-animate:appear="{duration: 0.2}"
 * v-animate:appear.hide
 * v-animate.hide="{duration: 1, opacity: 1}"
 * v-animate:appear.hide="{duration: 0.2}"
 */

Vue.directive("animate", {
  // apply setups
  bind(el, binding) {
    let setup = Object.keys(binding.modifiers);
    if (!setup.length) {
      // check for dynamic modifier
      setup = binding.arg.split(".").slice(1);
    }
    if (setup.length) {
      const theSetup = setup[0];
      gsap.set(el, { ...setups[theSetup] });
    }
  },

  // apply animation
  inserted(el, binding) {
    if (!binding.arg && !binding.value) {
      return; // there is no animation, only a setup
    }

    // remove any dynamic modifiers from the arg
    let arg;
    if (binding) {
      [arg] = binding.arg.split(".");
    }

    let setup = Object.keys(binding.modifiers);

    if (!setup.length) {
      // check for dynamic modifier
      setup = binding.arg.split(".").slice(1);
    }

    // get the animation data from the argument or the value if set
    let theAnimation = null;
    if (setup.length > 1) {
      theAnimation = setup[1];
    }
    let animation = null;
    animation = theAnimation ? { ...animations[theAnimation] } : binding.value;

    // override default options of animation when both argument and value exist
    if (theAnimation && binding.value) {
      animation = { ...animation, ...binding.value };
    }

    // if we are staggering then it is within a v-for loop
    let stagger = null;
    if (arg && arg.includes("stagger")) {
      const parent = el.parentNode;
      const index = Array.prototype.indexOf.call(parent.children, el);
      stagger = index * 0.3;
    }

    // apply stagger timing
    if (stagger !== null) {
      animation.delay += stagger;
    }

    // run gsap on element with animation data
    if (el.nodeName === "IMG" && !el.complete) {
      el.addEventListener("load", () => gsap.to(el, animation));
    } else {
      console.log(animation);
      gsap.to(el, animation);
    }
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
