<template>
  <div>
    <img :src="pin" alt="" />
    <p v-html="itemData.location" />
  </div>
</template>

<script>
import mapPin from '@/assets/icon-map-pin.svg';

export default {
  name: 'BasePin',
   props: {
    location: {
      type: String,
      default: '',
      required: true
    },
    data() {
      return {
        pin: mapPin
      };
    }
};
</script>

<style scoped>
li {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 2rem auto;
  list-style: none;
}

article {
  display: flex;
}
</style>
