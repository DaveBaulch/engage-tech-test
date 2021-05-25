<template>
  <li class="nav-item mr-6">
    <router-link
      :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
      class=""
    >
      <div class="flex flex-col bg-white p-6 mb-2 rounded-md">
        <use :xlink:href="require(`@/assets/') + itemData.image"></use>
      </div>
      <span class="flex justify-center font-semibold">
        {{ itemData.title }}
      </span>
    </router-link>
  </li>
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
.router-link-active div {
  background-color: #ff585d;
  color: #ffffff;
}

.router-link-active svg * {
  fill: #ffffff !important;
}
</style>
