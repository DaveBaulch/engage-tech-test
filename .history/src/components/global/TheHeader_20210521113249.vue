<template>
  <header class="p-16">
    <h1 v-animate:appearLongDelay.hideUp>
      <TheLogo width="50%" class="flex justify-center" />
    </h1>
  </header>
</template>

<script>
import TheLogo from "@/components/global/TheLogo";

export default {
  name: "TheHeader",
  components: {
    TheLogo,
  },
};
</script>

<style scoped></style>
