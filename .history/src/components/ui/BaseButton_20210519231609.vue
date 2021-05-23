<template>
  <router-link
    v-if="type === 'router-link'"
    :to="{ name: 'Index', params: { id: categoryId } }"
    :class="style"
    >{{
    <slot>
      <figure v-if="icon">
        <img :src="icon" alt="alt" />
      </figure>
      <span v-if="text" v-html="text"></span>
    </slot>
    }}</router-link
  >
  <a v-else-if="type === 'link'" :href="to" :class="style">
    <slot>
      <figure v-if="icon">
        <img :src="icon" alt="alt" />
      </figure>
      <span v-if="text" v-html="text"></span></slot
  ></a>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'router-link'
    },
    text: {
      type: String,
      default: null,
      required: false
    },
    icon: {
      type: String,
      default: null,
      required: false
    },
    alt: {
      type: String,
      default: null,
      required: false
    },
    style: {
      type: String,
      default: null,
      required: false
    },
    to: {
      type: String,
      default: 'Home',
      required: true
    },
    categoryId: {
      type: String,
      default: '1
      required: false
    }
  }
};
</script>

<style scoped>
.button {
  display: inline-block;
  vertical-align: middle;
  font-family: inherit;
  font-size: 100%;
  cursor: pointer;
  border: 1px solid grey;
  margin: 0;
  padding: 1.3rem 1.5rem;
  background-color: white;
  color: grey;
  font-weight: 700;
  text-align: center;

  &,
  &:hover {
    text-decoration: none;
  }

  /* only remove default outline if alternative focus styling is provided
  *  2.4.7 Focus Visible: Any keyboard operable user interface has a mode of operation where
  *  the keyboard focus indicator is visible. (Level AA)
  */

  &:active,
  &:focus {
    outline: 0;
    border: 1px solid red;
  }
}
</style>
