<template>
  <div>
    <h1>This is the enquirry page</h1>
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
    itemData() {
      return this.$store.getters.getCategoryItemById(
        parseInt(this.$route.params.itemId)
      );
    },
    categoryId() {
      return this.itemData.categoryId;
    }
  }
};
</script>
