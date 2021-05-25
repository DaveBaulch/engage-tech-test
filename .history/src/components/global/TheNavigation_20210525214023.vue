<template>
  <nav aria-label="Categories">
    <ul class="flex items-start p-6 overflow-x-scroll mr-6" role="list">
      <TheNavigationItem
        v-for="item in navData"
        :itemData="item"
        :key="item.id"
      />
      <IconCat width="50" height="50"></IconCat>
      <>
    </ul>
  </nav>
</template>

<script>
import TheNavigationItem from "@/components/global/TheNavigationItem";
import gsap from "gsap";

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
  mounted() {
    const animationIsOkay = window.matchMedia(
      "(prefers-reduced-motion:no-preference)"
    ).matches;

    if (animationIsOkay) {
      gsap.fromTo(
        ".nav-item",
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 20,
          opacity: 1,
          duration: 0.5,
          stagger: {
            each: 0.25,
          },
        }
      );
    }
  },
};
</script>

<style scoped></style>
