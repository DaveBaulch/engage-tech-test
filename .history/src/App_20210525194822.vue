<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
}

/* Set default durations */
:root {
  --animation-duration: 250ms;
  --transition-duration: 250ms;
}

/* Contextually shorten duration length */
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  :root {
    --animation-duration: 0.001ms !important;
    --transition-duration: 0.001ms !important;
  }
}

@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  /* Remove duration for all unknown animation when a user requests a reduced animation experience */
  * {
    animation-duration: var(--animation-duration);
    animation-iteration-count: 1 !important;
    transition-duration: var(--animation-duration);
    transform: none !important;
    border: 1px solid #f0f !important;
  }
}
</style>
