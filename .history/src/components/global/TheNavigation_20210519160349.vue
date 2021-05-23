<template>
    <ul class="navigation">
      <the-navigation-item 
        v-for v-for="item in content"               
        :item="item"
          :groupId="groupId"
              :key="item.id"/>
    <ul>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>
