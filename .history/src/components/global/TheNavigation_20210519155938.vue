<template>
  <header class="header">
    <TheLogo />
    <div class="navigation-items"></div>
  </header>
</template>

<script>
import TheLogo from '@/components/global/TheLogo';

export default {
  name: 'TheLogo',
  components: {
    TheLogo
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  box-sizing: border-box;
  padding: 0;
}
</style>
