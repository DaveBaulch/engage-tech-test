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
  watch: {
    categoryItems: function () {
      this.forceRerender();
    },
  },
  methods: {
    forceRerender() {
      gsap.set(".list-item", {
        y: 0,
        opacity: 0,
      });
      gsap.to(".list-item", {
        y: -30,
        opacity: 1,
        duration: 0.5,
        stagger: {
          each: 1,
        },
      });
    },
  },
  mounted() {
    this.forceRerender();
  },
};
</script>
