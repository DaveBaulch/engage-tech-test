<template>
  <router-link :to="{ name: 'detail', params: { itemId: itemData.id } }">
    <li>
      <article class="flex">
        <img :src="itemData.image" :alt="itemData.name" />
        <div>
          <dl>
            <dt>
              <h2>{{ itemData.name }}</h2>
            </dt>
            <dd><p v-html="itemData.type" /></dd>
            <dd><p v-html="itemData.age" /></dd>
            <dd>
              <MapPin :location="itemData.location" />
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
    MapPin
  },
  props: {
    itemData: {}
  }
};
</script>

<style scoped></style>
