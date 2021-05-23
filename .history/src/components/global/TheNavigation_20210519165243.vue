<template>
  <ul class="navigation">
    <TheNavigationItem
      v-for="item in navData"
      :itemData="item"
      :key="item.id"
    />
  </ul>
</template>

<script>
import Home from '@/views/TheNavigationItem';

export default {
  name: 'TheNavigationItem',
  components: {
    TheNavigationItem
  }
};
</script>

<style scoped></style>
