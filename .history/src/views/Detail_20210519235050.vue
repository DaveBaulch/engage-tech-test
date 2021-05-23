<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton :to="Index" :categoryId="categoryId" text="Back"></BaseButton>
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
        parseInt(this.$route.params.id)
      );
    },
    categoryId() {
      return String(this.$route.params.id);
    }
  }
};
</script>
