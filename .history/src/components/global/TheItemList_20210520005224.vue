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
      return this.$store.getters(
        getCategoryItems(this.$route.params.categoryId)
      );
    },
    itemDetail() {
      return this.$store.getters.getCategoryItemById(
        parseInt(this.$route.params.itemId)
      );
    }
  }
};
</script>

<style scoped></style>
