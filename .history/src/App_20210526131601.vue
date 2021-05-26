<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import store from "./store";

export default {
  name: "App",
  created() {
    axios
      .get("../data/site-data.json")
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0]);
        store.dispatch("setCategorys", { categorys: response.data[0] });
        console.log(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  },
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

/* If animations are reduced at the OS level, use simpler transitions */
@media screen and (prefers-reduced-motion: reduce) {
  .slide-enter-active,
  .slide-leave-active {
    animation: none !important;
  }
}
</style>
