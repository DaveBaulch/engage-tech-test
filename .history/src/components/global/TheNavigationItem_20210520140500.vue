<template>
  <router-link
    :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
    class="overflow-hidden border-black"
  >
    <li
      class="mr-4 br-20 bg-white p-6 rounded-3xl overflow-hidden border-black"
    >
      <img :src="itemData.logo" :alt="itemData.alt" />
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

<style scoped></style>
