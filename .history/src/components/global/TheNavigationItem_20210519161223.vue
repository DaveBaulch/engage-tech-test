<template>
  <li class="navigation-item">
    <router-link to="detail/:">
      <img :src="itemData.logo" alt="itemData.alt" />
      {{ itemData.title }}
    </router-link>
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
