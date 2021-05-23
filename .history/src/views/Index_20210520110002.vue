<template>
  <div class="main" role="main">
    <TheHeader />
    <TheNavigation />
    <TheItemList />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/global/TheHeader.vue';
import TheNavigation from '@/components/global/TheNavigation.vue';
import TheItemList from '@/components/global/TheItemList.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheNavigation,
    TheItemList
  }
};
</script>

<style scoped>
.main {
  background-color: grey;
}
</style>
