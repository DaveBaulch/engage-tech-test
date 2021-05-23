<template>
  <router-link :to="{ name: 'detail', params: { itemId: itemData.id } }">
    <li>
      <article>
        <img :src="itemData.image" :alt="itemData.name" />
        <div>
          <dl>
            <dt>
              <h2>{{ itemData.name }}</h2>
            </dt>
            <dd><p v-html="itemData.type" /></dd>
            <dd><p v-html="itemData.age" /></dd>
            <dd>
              <img :src="pin" alt="" />
              <p v-html="itemData.location" />
            </dd>
          </dl>
        </div>
      </article>
    </li>
  </router-link>
</template>

<script>
import MapPin from '@/components/ui/BasePin';

export default {
  name: 'BaseCard',
  components: {
    BaseButton,
    MapPin
  },  
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
