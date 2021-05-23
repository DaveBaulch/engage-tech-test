<template>
  <ul class="navigation">
    <BaseCard v-for="item in categoryItems" :itemData="item" :key="item.id" />
  </ul>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';

export default {
  name: 'TheItemList',
  components: {
    BaseCard
  },
  computed: {
    categoryItems() {
      return this.$store.getters['getCategoryItems'];
    }
  }
};
</script>

<style scoped></style>
