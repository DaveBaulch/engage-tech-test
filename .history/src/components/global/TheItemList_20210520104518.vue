<template>
  <div>
    {{ categoryId }}
    <ul>
      <TheItemListItem
        v-for="item in categoryItems"
        :itemData="item"
        :key="item.id"
      />
    </ul>
  </div>
</template>

<script>
import TheItemListItem from '@/components/glo/TheItemListItem';

export default {
  name: 'TheItemList',
  components: {
    TheItemListItem
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
