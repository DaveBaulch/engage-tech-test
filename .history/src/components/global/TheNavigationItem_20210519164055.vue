<template>
 
  < :to="{ name: 'Detail', params: { id: itemData.id }}">
    <li>
      <img 
        :src="itemData.logo" 
        :alt="itemData.alt" 
      />
      {{ itemData.title }}
    </li>
  </>
 
</template>

<script>
export default {
  props: {
    itemData: {}
  }
};
</script>

<style scoped></style>
