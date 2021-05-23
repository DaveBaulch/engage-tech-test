<template>
  <router-link :to="{ name: 'Detail', params: { id: itemData.id } }">
    <li>
      <img :src="itemData.image" :alt="itemData.alt" />
      {{ itemData.title }}
       {{ itemData.title }}
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    itemData: {}
  }
};
</script>

<style scoped>
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
