<template>
  <li >
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

<style scoped>
li {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 2rem auto;
  list-style: none;
}
</style>
