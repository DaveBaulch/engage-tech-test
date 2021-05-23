<template>
  <div>
    <h1>This is the item detail page</h1>
    User {{ $route.params.id }}
    {{ itemDetail }}
  </div>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    itemId: {
      return this.$route.params.id;
    },
    itemDetail() {
      // const itemId = $route.params.id;
      return this.$store.getters['getCategoryItemById(2)'];
    }
  }
};
</script>
