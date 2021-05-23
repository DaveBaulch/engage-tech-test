<template>
  <header class="header">
    <img src="@/assets/logo.svg" width="50%" alt="Enquire" />
    <TheLogo />
  </header>
</template>

<script>
import TheLogo from '@/components/global/TheLogo';

export default {
  name: 'TheHeader',
  components: {
    TheNavigationItem
  },
};
</script>

<style scoped></style>
