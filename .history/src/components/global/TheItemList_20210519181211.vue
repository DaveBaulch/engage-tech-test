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
import Base|c from '@/components/global/TheNavigationItem';

export default {
  name: 'TheNavigation',
  components: {
    TheNavigationItem
  },
  computed: {
    navData() {
      return this.$store.getters['getCategorys'];
    }
  }
};
</script>

<style scoped></style>
