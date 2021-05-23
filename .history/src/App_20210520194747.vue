<template>
  <div id="app">
    <vue-page-transition name="flip-y">
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
