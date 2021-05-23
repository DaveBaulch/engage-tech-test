<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton :to="Home" :categoryId="categoryId" text="Back"></BaseButton>
    {{ itemDetail }}
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'Detail',
  components: {
    BaseButton
  },
  computed: {
    itemDetail() {
      return this.$store.getters.getCategoryItemById(
        parseInt(this.$route.params.id)
      );
    },
    categoryId() {
      return parseInt(this.itemDetail.categoryId);
    }
  }
};
</script>
