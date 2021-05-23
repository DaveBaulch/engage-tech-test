<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton
      :to="{ name: 'index', params: { categoryId: categoryId } }"
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
    catId() {
      
    }
    itemDetail() {
      return this.$store.getters.getCategoryItemById(2);
    },
    categoryId() {
      return this.itemDetail.categoryId;
    }
  }
};
</script>
