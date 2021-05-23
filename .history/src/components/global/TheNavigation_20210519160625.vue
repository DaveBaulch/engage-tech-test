<template>
    <ul class="navigation">
      <TheNavigationItem
        v-for="item in content"               
        :item="item"
        :key="item.id"
      />
      </TheNavigationItem>
    <ul>
</template>

<script>
export default {
};
</script>

<style scoped>

</style>
