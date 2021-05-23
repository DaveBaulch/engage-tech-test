<template>
  <div>
    <h1>This is the item detail page</h1>
    User {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    itemDetail() {
      const itemId = $route.params.id;
      return this.$store.getters['getCategoryItemById(2)'];
    }
  }
};
</script>
