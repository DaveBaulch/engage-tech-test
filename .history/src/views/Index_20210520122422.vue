<template>
  <div>
    <div
      class="
        bg-purple
        text-white
        sm:bg-green
        md:bg-blue
        md:text-yellow
        lg:bg-red
        xl:bg-orange
      "
    >
      Test
    </div>
    <TheHeader />
    <div class="main" role="main">
      <TheNavigation />
      <TheItemList />
    </div>
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
  background-color: #eee;
}
</style>
