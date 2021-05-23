<template>
  <router-link :to="{ name: 'Detail', params: { id: itemData.id } }">
    <li>
      <img :src="itemData.image" :alt="itemData.alt" />
      {{ itemData.id }}
      {{ itemData.categoryId }}
      {{ itemData.name }}
      {{ itemData.type }}
      {{ itemData.age }}
      {{ itemData.location }}
      {{ itemData.image }}
      {{ itemData.ownerName }}
      {{ itemData.ownerType }}
      {{ itemData.ownerDate }}
      {{ itemData.ownerDescription }}
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
ul {
  list-style: none;
  padding: 0 2rem;
}

li {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
