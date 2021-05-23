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
import TheLogo from '@/components/global/TheLogo';

export default {
  name: 'TheLogo',
  components: {
    TheLogo
  }
};
</script>
</script>

<style scoped>

</style>
