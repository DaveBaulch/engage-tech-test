<template>
  <li class="navigation-item">
    <router-link to="{ name: 'Detail', params: { id: itemData.id }}>
      <img :src="itemData.logo" :alt="itemData.alt" />
      {{ itemData.title }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    itemData: Object
  }
};
</script>

<style scoped></style>
