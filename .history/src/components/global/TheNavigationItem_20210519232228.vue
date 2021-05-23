<template>
  <router-link :to="{ name: 'Index', params: { id: itemData.categoryId } }">
    <li>
      <img :src="itemData.logo" :alt="itemData.alt" />
      {{ itemData.title }}
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'TheNavigationItem',
  props: {
    itemData: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
