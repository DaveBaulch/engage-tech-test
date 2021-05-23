<template>
  <div aria-live="polite">
      <ul class="m-6">
        <TheItemListItem
          v-for="item in categoryItems"
          :itemData="item"
          :key="item.id"
        />
      </ul>

</template>

<script>
import TheItemListItem from "@/components/global/TheItemListItem";

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

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
