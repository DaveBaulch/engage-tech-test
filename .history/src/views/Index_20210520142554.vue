<template>
  <div>
    <!-- <div class="text-white bg-red-600">Test</div> -->
    <TheHeader />
    <div class="bg-gray-200" role="main">
      <TheNavigation />
      <TheItemList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/global/TheHeader.vue";
import TheNavigation from "@/components/global/TheNavigation.vue";
import TheItemList from "@/components/global/TheItemList.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
    TheNavigation,
    TheItemList,
  },
};
</script>

<style scoped></style>
