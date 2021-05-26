<template>
  <div class="flex flex-col">
    <TheHeader />
    <main class="bg-gray-100 flex flex-col flex-1" role="main">
      <TheNavigation />
      <ItemList />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/global/TheHeader.vue";
import TheNavigation from "@/components/global/TheNavigation.vue";
import ItemList from "@/components/ItemList.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
    TheNavigation,
    ItemList,
  },
  metaInfo() {
    return {
      title: "Index",
    };
  },
};
</script>
