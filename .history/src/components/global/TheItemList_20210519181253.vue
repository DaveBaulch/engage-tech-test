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
import BaseCard from '@/components/ui/BaseCard';

export default {
  name: 'TheNavigation',
  components: {
    BaseCard
  },
  computed: {
    navData() {
      return this.$store.getters['getItems'];
    }
  }
};
</script>

<style scoped></style>
