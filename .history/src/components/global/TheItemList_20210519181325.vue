<template>
  <ul class="navigation">
    <TheNavigationItem
      v-for="item in categoryItems"
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
    itemData() {
      return this.$store.getters['categoryItems'];
    }
  }
};
</script>

<style scoped></style>
