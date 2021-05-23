<template>
  <ul class="flex ">
    <TheNavigationItem
      v-for="item in navData"
      :itemData="item"
      :key="item.id"
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
