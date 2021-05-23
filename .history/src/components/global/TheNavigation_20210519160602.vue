<template>
    <ul class="navigation">
      <TheNavigationItem
        v-for v-for="item in content"               
        :item="item"
        :key="item.id"/>
    <ul>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>
