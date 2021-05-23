<template>
  <router-link :to="{ name: 'Detail', params: { id: itemData.id } }">
    <li>
      <img :src="itemData.image" :alt="itemData.alt" />
        itemData.id: 1,
        itemData.categoryId: 1,
        itemData.name: 'Fluffy',
        itemData.type: 'Abyssinian cat',
        age: '2 years old',
        location: '3.6km',
        image: 'https://placekitten.com/200/300?image=1',
        ownerName: 'Will Blackmore',
        ownerType: 'Owner',
        ownerDate: '14th Apr 2021',
        ownerDescription:
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
