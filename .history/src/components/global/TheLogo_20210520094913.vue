<template>
  <router-link to="/"><img :src="logo" alt="alt" width="width" /></router-link>
</template>

<script>
import logo from '@/assets/logo.svg';

export default {
  name: 'TheLogo',
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
