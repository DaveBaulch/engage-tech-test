<template>
  <div>
    <TheHeader />
    <TheNavigation />
    <TheItemList />
    This is the index page
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/global/TheHeader.vue';
import TheNavigation from '@/components/global/TheNavigation.vue';
import TheNavigation from '@/components/global/TheNavigation.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheNavigation
  }
};
</script>
