<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="scale-slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">
scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}


.scale-slide-enter-from {
  left: -100%;
}


.scale-slide-enter-to {
  left: 0%;
}

</style>
