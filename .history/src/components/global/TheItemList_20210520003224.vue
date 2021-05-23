<template>
  div>

  <ul>
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
    categoryId() {
      return this.$router.params.categoryId;
    },
    categoryItems() {
      return this.$store.getters['getCategoryItems'];
    }
  }
};
</script>

<style scoped></style>
