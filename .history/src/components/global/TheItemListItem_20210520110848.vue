<template>
  <router-link :to="{ name: 'detail', params: { itemId: itemData.id } }">
    <li>
      <article>
        <img :src="itemData.image" :alt="itemData.alt" />
        <div>
          <dl>
          <dt><h2>{{ itemData.name }}</h2></dt>
          <dd><p v-html="itemData.type" /></dd>
          <p v-html="itemData.age" /></dd>
          <img :src="pin" />
          <p v-html="itemData.location" />
          </dl>
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
}

li {
  list-style: none;
  margin: 2rem 0 0 0;
  border-radius: 10px;
  overflow: hidden;
}
</style>
