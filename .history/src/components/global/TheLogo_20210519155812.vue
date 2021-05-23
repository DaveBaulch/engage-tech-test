<template>
  <router-link to="/"><img :src="logo" alt="alt" /></router-link>
</template>

<script>
import logo from 'assets/logo.svg';

export default {
  props: {
    src: {
      type: String,
      default: logo,
      required: false
    },
    alt: {
      type: String,
      default: 'Engage'
    }
  },

  data() {
    return {
      logo: this.src || logo
    };
  }
};
</script>
