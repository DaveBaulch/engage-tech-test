<template>
  <router-link
    :to="{ name: route, params: { id: id, categoryId: categoryId } }"
    class="p-3"
  >
    <slot>
      <span v-if="text" v-html="text"></span>
      <img v-if="icon" :src="icon" alt="" />
    </slot>
  </router-link>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "router-link",
    },
    text: {
      type: String,
      default: null,
      required: false,
    },
    icon: {
      type: String,
      default: null,
      required: false,
    },
    alt: {
      type: String,
      default: null,
      required: false,
    },
    route: {
      type: String,
      default: "index",
      required: false,
    },
    id: {
      type: Number,
      default: 1,
      required: false,
    },
    categoryId: {
      type: String,
      default: "cats",
      required: false,
    },
  },
};
</script>
