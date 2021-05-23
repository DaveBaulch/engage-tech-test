<template>
  <li class="navigation-item">
    <router-link :to="{ name: 'detail', params: { id: itemData.id }}>
      <img :src={{itemData.logo"}} alt="itemData.alt" />
      {{ itemData.title }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    itemData: {}
  }
};
</script>

<style scoped></style>
