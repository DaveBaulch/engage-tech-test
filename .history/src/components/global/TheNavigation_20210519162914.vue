<template>
  <ul class="navigation">
    <TheNavigationItem 
    v-for="item in navData" :item="item" :key="item.id" />
  </ul>
</template>

<script>
import TheNavigationItem from '@/components/global/TheNavigationItem';

export default {
  name: 'TheNavigationItem',
  components: {
    TheNavigationItem
  }
};
</script>

<style scoped></style>
