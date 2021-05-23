<template>
  <router-link :to="{ name: 'detail', params: { itemId: itemData.id } }">
    <li>
      <article>
        <img :src="itemData.image" :alt="itemData.alt" />
        {{ itemData.id }}
        {{ itemData.categoryId }}
        {{ itemData.name }}
        {{ itemData.type }}
        {{ itemData.age }}
        {{ itemData.location }}
        <!-- {{ itemData.ownerName }}
        {{ itemData.ownerType }}
        {{ itemData.ownerDate }}
        {{ itemData.ownerDescription }} -->
      </article>
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
  list-style: none;
}
</style>
