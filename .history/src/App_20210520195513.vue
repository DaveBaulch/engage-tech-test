<template>
  <div id="app">
    <transition name="slide" mode="out-in">
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
