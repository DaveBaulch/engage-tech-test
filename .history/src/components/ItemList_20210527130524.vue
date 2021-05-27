<template>
  <div>
    <div v-if="loading && !dataLoaded"></div>
    <div v-else-if="!dataLoaded" class="m-6">No results.</div>
    <div v-else>
      <nav aria-live="polite" aria-label="Category items">
        <ul class="m-6 pt-6" role="list">
          <ItemListItem
            v-for="item in categoryItems"
            :itemData="item"
            :key="item.id"
          />
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import ItemListItem from "@/components/ItemListItem";
import prefersReducedMotion from "/mixins/prefersReducedMotion.js";
import gsap from "gsap";

export default {
  name: "ItemList",
  components: {
    ItemListItem,
  },
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    categoryItems: function () {
      this.loading = false;
    },
  },
  computed: {
    categoryItems() {
      return this.$store.getters.getCategoryItems(
        this.$route.params.categoryId
      );
    },
    dataLoaded() {
      return this.categoryItems.length ? true : false;
    },
  },
  methods: {
    forceRerender() {
      const animationIsOkay = window.matchMedia(
        "(prefers-reduced-motion:no-preference)"
      ).matches;

      if (animationIsOkay) {
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
      }
    },
  },
  mounted() {
    if (this.dataLoaded) {
      this.forceRerender();
    }
  },
  updated() {
    this.forceRerender();
  },
};
</script>
