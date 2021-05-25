<template>
  <nav aria-label="Categories">
    <ul class="flex items-start p-6 overflow-x-scroll mr-6" role="list">
      <TheNavigationItem
        v-for="item in navData"
        :itemData="item"
        :key="item.id"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" class="icon">
          <path
            d="M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z"
          ></path>
        </svg>
      </TheNavigationItem>
    </ul>
  </nav>
</template>

<script>
import TheNavigationItem from "@/components/global/NavigationItem";
import IconCat from "@/assets/icon-cat";
import gsap from "gsap";

export default {
  name: "TheNavigation",
  components: {
    TheNavigationItem,
    IconCat,
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
