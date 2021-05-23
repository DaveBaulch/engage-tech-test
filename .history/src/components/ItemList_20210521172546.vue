<template>
  <nav aria-live="polite">
    <ul class="m-6 list-none">
      <TheItemListItem
        v-for="item in categoryItems"
        :itemData="item"
        :key="item.id"
        @click="forceRerender()"
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
  updated() {
    this.forceRerender();
  },
  methods: {
    forceRerender() {
      gsap.to(".list-item", {
        y: -210,
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
};
</script>
