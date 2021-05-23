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
#app {
}
</style>
