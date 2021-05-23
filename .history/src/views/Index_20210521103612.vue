<template>
  <div>
    <TheHeader />
    <main class="bg-gray-100" role="main">
      <TheNavigation />
      <TheItemList />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/global/TheHeader.vue";
import TheNavigation from "@/components/global/TheNavigation.vue";
import TheItemList from "@/components/ItemList.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
    TheNavigation,
    TheItemList,
  },
  metaInfo() {
    return {
      title: '',
    };
  },  
};
</script>

<style scoped></style>
