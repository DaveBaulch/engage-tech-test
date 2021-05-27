export default {
  methods: {
    prefersReducedMotion: function () {
      return   const animationIsOkay = window.matchMedia(
        "(prefers-reduced-motion:no-preference)"
      ).matches;
    }
  }
}