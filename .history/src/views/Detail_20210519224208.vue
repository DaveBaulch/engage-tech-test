<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton>Back</BaseButton>
    Test {{ itemId }}
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
    itemId() {
      return this.$route.params.id;
    },
    itemDetail() {
      // const itemId = $route.params.id;
      return this.$store.getters.getCategoryItemById(
        CINt(this.$route.params.id)
      );
    }
  }
};
</script>
