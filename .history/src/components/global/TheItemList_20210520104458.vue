<template>
  <div>
    {{ categoryId }}
    <ul>
      <BaseCard v-for="item in categoryItems" :itemData="item" :key="item.id" />
    </ul>
  </div>
</template>

<script>
import TheItemListItem from '@/components/ui/BaseCard';

export default {
  name: 'TheItemList',
  components: {
    BaseCard
  },
  computed: {
    categoryItems() {
      return this.$store.getters.getCategoryItems(
        this.$route.params.categoryId
      );
    }
  }
};
</script>

<style scoped></style>
