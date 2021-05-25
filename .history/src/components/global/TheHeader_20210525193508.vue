<template>
  <header class="p-16">
    <h1>
      <TheLogo
        width="50%"
        class="flex justify-center"
        v-animate:appearShortDelay.hideUp
      />
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
