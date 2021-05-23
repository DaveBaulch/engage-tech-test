<template>
  <router-link to="/" class="logo__link"><img :src="logo" alt="alt" />
</template>

<script>
import logo from 'assets/logo.svg';

export default {
  props: {
    src: {
      type: String,
      default: logo
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
