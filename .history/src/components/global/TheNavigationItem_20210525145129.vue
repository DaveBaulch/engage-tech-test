<template>
  <li class="rounded-3xl overflow-hidden nav-link br-20 font-semibold mr-6">
    <router-link
      :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
      class=""
      v-animate:stagger.hideUp.appearShortDelay
    >
      <div
        class="
          overflow-hidden
          flex flex-col
          items-center
          justify-center
          flex-shrink
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
      <span>
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

.nav-link div img:nth-child(1) {
  display: none;
}

.router-link-active li div img:nth-child(1) {
  display: block;
}

.router-link-active li div img:nth-child(2) {
  display: none;
}
</style>
