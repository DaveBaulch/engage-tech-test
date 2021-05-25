<template>
  <li class="nav-item mr-6">
    <router-link
      :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
    >
      <div class="flex flex-col bg-white p-6 mb-2 rounded-md">
        <svg width="50" height="50">
        <use :xlink:href="`@/assets/icon-cat.svg`"></use>
        </svg>
        <span class="flex justify-center font-semibold">
          {{ itemData.title }}
        </span>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'TheNavigationItem',
  props: {
    itemData: {
      type: Object,
      required: true
    }
  }
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
