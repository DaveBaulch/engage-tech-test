<template>
  <div aria-live="polite">
    <nav class="m-6">
      <TheItemListItem
        v-for="item in categoryItems"
        :itemData="item"
        :key="item.id"
      />
    </nav>
  </div>
</template>

<script>
import TheItemListItem from "@/components/TheItemListItem";

export default {
  name: "TheItemList",
  components: {
    TheItemListItem,
  },
  computed: {
    categoryItems() {
      return this.$store.getters.getCategoryItems(
        this.$route.params.categoryId
      );
    },
  },
};
</script>

<style scoped></style>
