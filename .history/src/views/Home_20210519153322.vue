<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from "@/components/ui/TheHeader.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
  },
};
</script>
