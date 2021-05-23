<template>
  <img :src="logo" />
</template>

<script>
import logo from 'assets/layout/logo.svg';

export default {
  props: {
    src: {
      type: String,
      default: logo
    }
  },

  data() {
    return {
      logo: this.src || logo
    };
  }
};
</script>
