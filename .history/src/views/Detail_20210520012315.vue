<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton
      :to="{
        name: 'index',
        params: { categoryId: categoryId }
      }"
      :type: "router
      text="Back"
    ></BaseButton>
    <hr />
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
        parseInt(this.$route.params.itemId)
      );
    },
    categoryId() {
      return this.itemDetail.categoryId;
    }
  }
};
</script>
