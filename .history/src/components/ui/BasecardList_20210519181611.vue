<template>
  <ul>
    <BaseCard       v-for="item in navData"
      :itemData="item"
      :key="item.id"/>
  </ul>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue';

export default {
  name: 'BaseCardList',
  props: {
    block: Object
  },
  components: {
    BaseCard
  }
};
</script>

<style scoped></style>
