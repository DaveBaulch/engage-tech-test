<template>
  <li class="navigation-item">
    {{ itemData.lo }}
    {{ itemData.title }}
  </li>
</template>

<script>
import TheNavigationItem from '@/components/global/TheNavigationItem';

export default {
  name: 'TheNavigationItem',
  props: {
    itemData: {}
  },
  components: {
    TheNavigationItem
  }
};
</script>

<style scoped></style>
