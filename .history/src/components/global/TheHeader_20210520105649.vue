<template>
  <header class="header">
    <TheLogo width="50%" />
  </header>
</template>

<script>
import TheLogo from '@/components/global/TheLogo';

export default {
  name: 'TheHeader',
  components: {
    TheLogo
  }
};
</script>

<style scoped>
.header {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
