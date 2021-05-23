<template>
  <router-link
    :to="{ name: 'Index', params: { categoryId: itemData.categoryId } }"
  >
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
      type: {}},
      required: true
    }
  }
};
</script>

<style scoped></style>
