<template>
  <li class="nav-item mr-6">
    <router-link
      :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
      class=""
    >
      <div class="flex flex-col bg-white p-6 mb-2 rounded-md">
        <svg
          :src="require(`@/assets/${itemData.image}.svg`)"
          class="border-block w-14"
          alt=""
          role="none"
        />
        <svg
          :src="require(`@/assets/${itemData.image}-active.svg`)"
          class="border-block w-14"
          alt=""
          role="none"
        />
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

.nav-item svg:nth-child(1) {
  display: none;
}

.router-link-active svg:nth-child(1) {
  display: block;
}

.router-link-active svg:nth-child(2) {
  display: none;
}
</style>
