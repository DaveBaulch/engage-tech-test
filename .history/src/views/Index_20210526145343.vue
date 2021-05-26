<template>
  <div>
    <TheHeader />
    <main class="bg-gray-100" role="main">
      <TheNavigation navData={navData} />
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
  computed: {
    navData() {
      return this.$store.getters["getCategorys"];
    },
  },
  metaInfo() {
    return {
      title: "Index",
    };
  },
};
</script>
