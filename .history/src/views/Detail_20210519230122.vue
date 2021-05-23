<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton :to="Home" :categoryId="categoryId">Back</BaseButton>
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
    // itemId() {
    //   return this.$route.params.id;
    // },
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
