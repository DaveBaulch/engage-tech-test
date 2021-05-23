<template>
  <ul class="flex items-start p-6 overflow-x-scroll mr-6">
    <TheNavigationItem
      v-for="item in navData"
      :itemData="item"
      :key="item.id"
      v-animate:appearDelay.hideUp
    />
  </ul>
</template>

<script>
import TheNavigationItem from "@/components/global/TheNavigationItem";

export default {
  name: "TheNavigation",
  components: {
    TheNavigationItem,
  },
  computed: {
    navData() {
      return this.$store.getters["getCategorys"];
    },
  },
};
</script>

<style scoped></style>
