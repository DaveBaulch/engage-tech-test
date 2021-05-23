<template>
 
  <router-link :to="{ name: 'Detail', params: { id: itemData.id }}>
    <li>
      <img 
      q :src="itemData.logo" 
        :alt="itemData.alt" 
      />
      {{ itemData.title }}
    </li>
  </router-link>
 
</template>

<script>
export default {
  props: {
    itemData: {}
  }
};
</script>

<style scoped></style>
