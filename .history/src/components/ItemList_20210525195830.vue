<template>
  <nav aria-live="polite" aria-label="Category items">
    <ul class="m-6 pt-6" role="list">
      <ItemListItem
        v-for="item in categoryItems"
        :itemData="item"
        :key="item.id"
        motion-reduce:transition-none
        motion-reduce:transform-none
      />
    </ul>
  </nav>
</template>

<script>
import ItemListItem from "@/components/ItemListItem";
import gsap from "gsap";

export default {
  name: "ItemList",
  components: {
    ItemListItem,
  },
  computed: {
    categoryItems() {
      return this.$store.getters.getCategoryItems(
        this.$route.params.categoryId
      );
    },
  },
  methods: {
    forceRerender() {

      const animation
      gsap.fromTo(
        ".list-item",
        {
          y: 0,
          opacity: 0,
        },
        {
          y: -20,
          opacity: 1,
          duration: 1,
          stagger: {
            each: 0.5,
          },
        }
      );
    },
  },
  mounted() {
    this.forceRerender();
  },
  updated() {
    this.forceRerender();
  },
};
</script>
