<template>
  <div class="flex items-center mt-4">
    <img :src="pin" alt="" role="presentation" width="20" />
    <p v-html="location" class="font-semibold ml-2" />
  </div>
</template>

<script>
import mapPin from "@/assets/icon-map-pin.svg";

export default {
  name: "BasePin",
  props: {
    location: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      pin: mapPin,
    };
  },
};
</script>
