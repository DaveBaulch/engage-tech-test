<template>
  <router-link
    :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
    class="rounded-3xl overflow-hidden mr-6 flex-shrink-0 nav-link"
    v-animate:appear.hideUp.stagger
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
      <div
        class="
          br-20
          bg-white
          p-6
          rounded-md
          overflow-hidden
          transition-all
          duration-400
        "
      >
        <img
          :src="require(`@/assets/${itemData.image}.svg`)"
          class="border-block w-14"
          alt=""
          role="none"
        />
        <img
          :src="require(`@/assets/${itemData.image}-active.svg`)"
          class="border-block w-14"
          alt=""
          role="none"
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
  color: #ffffff;
}

.nav-link li div img:nth-child(1) {
  display: none;
}

.router-link-active li div img:nth-child(1) {
  display: block;
}

.router-link-active li div img:nth-child(2) {
  display: none;
}
</style>
