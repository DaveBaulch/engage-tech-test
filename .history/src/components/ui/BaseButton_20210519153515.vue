<template>
  <button
    class="button"
    :class="btnStyle"
  ><slot /></button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    url: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>


<style scoped>

</style>
