<template>
  <ul class="navigation">
    <TheNavigationItem
      v-for="item in navData"
      :itemData="item"
      :key="item.id"
    />
  </ul>
</template>

<script>
import TheNavigationItem from '@/components/global/TheNavigationItem';
import { mapGetters } from 'vuex';

export default {
  name: 'TheNavigation',
  components: {
    TheNavigationItem
  },
  computed: {
    isOpen() {
      return this.$store.state.isOpen; 
    }
  }
};
</script>

<style scoped></style>
