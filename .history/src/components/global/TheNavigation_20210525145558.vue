<template>
  <nav>
    <ul class="flex items-start p-6 overflow-x-scroll mr-6" role="list">
      <TheNavigationItem
        v-for="item in navData"
        :itemData="item"
        :key="item.id"
      />
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
  updated() {
    this.forceRerender();
  },
  methods: {
    forceRerender() {
      gsap.to("li", {
        y: 20,
        opacity: 1,
        duration: 0.5,
        stagger: {
          each: 0.5,
        },
      });
    },
  },
  computed: {
    navData() {
      return this.$store.getters["getCategorys"];
    },
  },
};
</script>

<style scoped></style>
