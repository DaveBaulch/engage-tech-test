<template>
  <router-link :to="{ name: 'detail', params: { itemId: itemData.id } }">
    <li>
      <article>
        <img :src="itemData.image" :alt="itemData.alt" />
        <div>
          {{ itemData.id }}
          {{ itemData.categoryId }}
          {{ itemData.name }}
          {{ itemData.type }}
          {{ itemData.age }}
          <img :src="pin" />
          {{ itemData.location }}
        </div>
      </article>
    </li>
  </router-link>
</template>

<script>
import mapPin from '@/assets/icon-map-pin.svg';

export default {
  name: 'BaseCard',
  props: {
    itemData: {}
  },
  data() {
    return {
      pin: mapPin
    };
  }
};
</script>

<style scoped>
article {
  display: flex;
}

li
</style>
