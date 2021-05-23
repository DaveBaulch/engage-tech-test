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
      return this.$store.getters['getCategoryItemById($route.params.id)'];
    }
  }
};
</script>
