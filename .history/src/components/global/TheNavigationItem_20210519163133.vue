<template>
 
    <router-link to="{ name: 'Detail', params: { id: itemData.id }}>
       <li class="navigation-item">
      <img 
        :src="itemData.logo" 
        :alt="itemData.alt" 
      />
      {{ itemData.title }}
       </li>
    </router-link>
 
</template>

<script>
export default {
  props: {
    itemData: Object
  }
};
</script>

<style scoped></style>
