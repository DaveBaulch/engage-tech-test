<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton></BaseButton>
    Test {{ itemId }}
    {{ itemDetail }}
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'Detail',
  computed: {
    itemId() {
      return this.$route.params.id;
    },
    itemDetail() {
      // const itemId = $route.params.id;
      return this.$store.getters.getCategoryItemById(1);
    }
  }
};
</script>
