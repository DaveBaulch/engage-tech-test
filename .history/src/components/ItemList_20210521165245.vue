<template>
  <nav aria-live="polite">
    <ul class="m-6 list-none">
      <TheItemListItem
        v-for="item in categoryItems"
        :itemData="item"
        :key="item.id"
      />
    </ul>
  </nav>
</template>

<script>
import TheItemListItem from "@/components/ItemListItem";
import gsap from "gsap";

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
  mounted() {
    gsap.to(".list-item", {
      x: 0,
      duration: 0.5,
      stagger: {
        each: 0.5,
      },
    });
  },
};
</script>
