<template>
  <div>
    {{ categoryId }}
    <ul>
      <BaseCard v-for="item in categoryItems" :itemData="item" :key="item.id" />
    </ul>
  </div>
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
      return this.$store.getters.getCategoryItems('cats');
    }
  }
};
</script>

<style scoped></style>
