<template>
<div class="header-container">
  <div class="container">
    <header class="header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <router-link to="/" class="logo__link">Site logo</router-link>
      </div>
      <div class="navigation-items">
        <!-- <ul class="nav-list">
          <router-link to="test-page" class="nav-list__item">Test page 1</router-link> |
        </ul> -->
      </div>
    </header>
  </div>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/global/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>

<style scoped>

.header {
  width: 100%;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  box-sizing: border-box;
  padding: 0;
}


</style>
