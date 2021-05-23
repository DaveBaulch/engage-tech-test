<template>
  <router-link :to="{ name: 'detail', params: { itemId: itemData.id } }">
    <li>
      <article>
        <img :src="itemData.image" :alt="itemData.alt" />
        <div>
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
  background-color: #fff;
  border-radius: 10px;
}

li {
  list-style: none;
  margin: 2rem 0 0 0;
  border-radius: 10px;
}
</style>
