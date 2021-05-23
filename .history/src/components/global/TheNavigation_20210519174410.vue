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
import { mapGetters } from 'vuex';

export default {
  name: 'TheNavigation',
  components: {
    TheNavigationItem
  },
  computed: {
    ...mapGetters(['navData: categoryModule/getCategoryData'])
  }
};
</script>

<style scoped></style>
