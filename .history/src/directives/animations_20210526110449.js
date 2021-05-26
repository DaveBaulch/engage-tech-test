import gsap from "gsap";

const directive = {

let animationIsOkay = window.matchMedia(
  "(prefers-reduced-motion:no-preference)"
).matches

if (animationIsOkay) {
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

  /**
   * v-animate directive
   * v-animate:appear
   * v-animate="{duration: 1, opacity: 1}"
   * v-animate:appear="{duration: 0.2}"
   * v-animate:appear.hide
   * v-animate.hide="{duration: 1, opacity: 1}"
   * v-animate:appear.hide="{duration: 0.2}"
   */

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
};

export default directive;
