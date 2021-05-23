<template>
  <div>
    <h1>This is the item detail page</h1>
    User {{ itemId }}
    {{ itemDetail }}
  </div>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    return this.$store.getters['getCategoryItemById(' + this.$route.params.id + ')'];
  }
};
</script>
