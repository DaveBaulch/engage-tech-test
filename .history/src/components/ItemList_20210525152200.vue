<template>
  <nav aria-live="polite">
    <ul class="m-6 pt-6" role="list">
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
  methods: {
    forceRerender() {
      gsap.to(".list-item", {
        y: -20,
        opacity: 1,
        duration: 0.5,
        stagger: {
          each: 0.5,
        },
      });
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
