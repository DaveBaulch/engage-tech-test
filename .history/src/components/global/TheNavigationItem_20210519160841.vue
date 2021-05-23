<template>
    <ul class="navigation">
      <TheNavigationItem
        v-for="item in content"               
        :item="item"
        :key="item.id"
      />
    <ul>
</template>

<script>
import TheNavigationItem from '@/components/global/TheNavigationItem';

export default {
  name: 'TheNavigationItem',
  props: {
    itemData: {}
  },
  components: {
    TheNavigationItem
  }
};
</script>

<style scoped>

</style>
