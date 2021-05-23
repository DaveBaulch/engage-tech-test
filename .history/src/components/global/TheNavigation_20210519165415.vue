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
import TheNavigationItem from '@/components/global/TheNavigationItem';

export default {
  name: 'TheNavigationItem'
};
</script>

<style scoped></style>
