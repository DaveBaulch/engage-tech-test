<template>
  <li class="nav-item mr-6">
    <router-link
      :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
    >
      <div class="flex flex-col bg-white p-6 mb-2 rounded-md">
        <slot></slot>
      </div>
      <span class="flex justify-center font-semibold">
        {{ itemData.title }}
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NavigationItem",

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
}

svg * {
  fill: #ffffff !important; /* TODO */
}
</style>
