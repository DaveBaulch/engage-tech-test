<template>
  <div id="app">
    <TheHeader />
    <TheNavigation />
    This is the index page
  </div>
</template>

<script>
import TheHeader from '@/components/global/TheHeader.vue';
import TheNavigation from '@/components/global/TheNavigation.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheNavigation
  }
};
</script>

<style lang="scss">
#app {
}
</style>
