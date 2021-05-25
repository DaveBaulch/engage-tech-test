<template>
<nav></nav>
  <ul class="flex items-start p-6 overflow-x-scroll mr-6" role="list">
    <TheNavigationItem
      v-for="item in navData"
      :itemData="item"
      :key="item.id"
      v-animate:stagger.hideUp.appearShortDelay
    />
  </ul>
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
    gsap.to(".nav-item", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: {
        each: 0.25,
      },
    });
  },
};
</script>

<style scoped></style>
