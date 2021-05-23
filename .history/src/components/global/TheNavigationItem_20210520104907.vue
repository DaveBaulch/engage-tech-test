<template>
  <router-link
    :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
  >
    <li class="navigation-item">
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

<style scoped>
.navigation-item {

}
</style>
