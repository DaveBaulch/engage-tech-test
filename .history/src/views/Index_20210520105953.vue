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
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 2rem auto;
  list-style: none;
}

</style>
