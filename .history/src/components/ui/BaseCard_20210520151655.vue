<template>
  <li class="br-">
    <article class="flex">
      <slot />
    </article>
  </li>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    itemData: {},
  },
};
</script>

<style scoped></style>
