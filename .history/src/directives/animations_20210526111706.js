import gsap from "gsap";
import Vue from "vue";



  // Vue.directive("animate", {
    // apply setups
    bind(el, binding) {
      let setup = Object.keys(binding.modifiers);
      if (!setup.length) {
        // check for dynamic modifier
        setup = binding.arg.split(".").slice(1);
        setup = binding.arg;
      }
      if (setup.length) {
        setup.forEach((setup) => {
          gsap.set(el, setups[setup]);
        });
      }
    },

    // apply animation
    inserted(el, binding) {
      if (!binding.arg && !binding.value) {
        return; // there is no animation, only a setup
      }

      // remove any dynamic modifiers from the arg
      let arg;
      if (binding.arg) {
        [arg] = binding.arg.split(".");
      }

      // get the animation data from the argument or the value if set
      let animation = arg ? { ...animations[arg] } : binding.value;

      // override default options of animation when both argument and value exist
      if (arg && binding.value) {
        animation = { ...animation, ...binding.value };
      }

      // run gsap on element with animation data
      if (el.nodeName === "IMG" && !el.complete) {
        el.addEventListener("load", () => gsap.to(el, animation));
      } else {
        gsap.to(el, animation);
      }
    },
  });
}
