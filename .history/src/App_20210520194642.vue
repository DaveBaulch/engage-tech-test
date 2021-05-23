<template>
  <div id="app">
    <vue-page-transition name="fade-in-left">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
}
</style>
