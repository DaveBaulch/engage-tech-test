<template>
  <router-link to="/"><img :src="logo" alt="alt" /></router-link>
</template>

<script>
import logo from '@/assets/logo.png';

export default {
  name: 'Logo',
  props: {
    src: {
      type: String,
      default: logo,
      required: false
    },
    alt: {
      type: String,
      default: 'Engage',
      required: false
    }
  },

  data() {
    return {
      logo: this.src || logo
    };
  }
};
</script>
