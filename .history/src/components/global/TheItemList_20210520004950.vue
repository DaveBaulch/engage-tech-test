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
    categoryId() {
      return this.$route.params.categoryId;
    },
    categoryItems() {
      return this.$store.getters[
        'getCategoryItems(parseInt(this.$route.params.categoryId))'
      ];
    }
  }
};
</script>

<style scoped></style>
