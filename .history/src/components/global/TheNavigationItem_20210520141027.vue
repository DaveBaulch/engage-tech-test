<template>
  <router-link
    :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
    class="rounded-3xl overflow-hidden"
  >
    <li
      class="mr-4 br-20 bg-white p-6 rounded-md overflow-hidden flex flex-col"
    >
      <div class="mr-4 br-20 bg-white p-6 rounded-md overflow-hidden flex flex-col">
        <img :src="itemData.logo" :alt="itemData.alt" class="border-block" />
      </div>
      {{ itemData.title }}
    </li>
  </router-link>
</template>

<script>
export default {
  name: "TheNavigationItem",
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.router-link-active li {
  background-color: #ff585d;
  color: #fff;
}
</style>
