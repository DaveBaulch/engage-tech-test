<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton
      :to="{ name: 'index', params: { categoryId: categoryId } }"
      text="Back"
    ></BaseButton>
    <hr />
    {{ catId }}
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
      return this.$route.params.itemId
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
