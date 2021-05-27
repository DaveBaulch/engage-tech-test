export default {
  methods: {
    prefersReducedMotion: function () {
      return window.matchMedia("(prefers-reduced-motion:no-preference)")
        .matches;
    },
  },
};
