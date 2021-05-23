<template>
  <div>
    <TheHeader />
    <TheNavigation />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/global/TheHeader.vue';
import TheNavigation from '@/components/global/TheNavigation.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheNavigation
  }
};
</script>
