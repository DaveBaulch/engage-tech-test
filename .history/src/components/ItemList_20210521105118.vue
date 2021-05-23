<template>
  <nav aria-live="polite">
    <ul class="m-6 list-none">
      <TheItemListItem
        v-for="item in categoryItems"
        :itemData="item"
        :key="item.id"
        v-animate:staggerappearDelayShort.hideUp
      />
    </ul>
  </nav>
</template>

<script>
import TheItemListItem from "@/components/ItemListItem";

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
