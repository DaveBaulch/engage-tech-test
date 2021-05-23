<template>
  <li class="navigation-item">
    <router-link to="detail/{{ itemData.title }}">
      <img :src="itemData.logo" alt="itemData.alt" />
      {{ itemData.title }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    itemData: {}
  }
};
</script>

<style scoped></style>
