<template>
  <router-link
    :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
    class="rounded-3xl overflow-hidden mr-6 flex-shrink-0"
  >
    <li
      class="
        overflow-hidden
        flex flex-col
        items-center
        justify-center
        flex-shrink
        font-semibold
      "
    >
      <div class="br-20 bg-white p-2 rounded-md overflow-hidden">
        <img
          :src="require(`@/assets/${itemData.image}`)"
          :alt="itemData.alt"
          class="border-block w-20"
        />
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
.router-link-active li div {
  background-color: #ff585d;
  color: #fff;
}
</style>
