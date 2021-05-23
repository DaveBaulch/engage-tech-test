<template>
  <div>
    <BaseButton
      route="index"
      :id="categoryId"
      type="router-link"
      text="Back"
      class="absolute top-6 left-4"
    >
      <img :src="arrowBack" alt="Back" width="25" />
      <span class="sr-only">Back</span>
    </BaseButton>
    <BaseButton
      route="enquire"
      :id="itemId"
      type="router-link"
      text="Enquire"
      class="absolute top-4 right-4 bg-red-400 text-white"
    >
      <img :src="arrowBack" alt="Back" width="25" />
      <span class="sr-only">Back</span>
    </BaseButton>
    <img :src="itemData.image" :alt="itemData.alt" class="w-screen" />

    <div
      class="
        p-6
        m-6
        -mt-20
        rounded-md
        bg-white
        flex flex-row
        justify-between
        relative
        overflow-hidden
        shadow-xl
      "
    >
      <dl>
        <dt>
          <h2 class="text-4xl font-bold mt-2">{{ itemData.name }}</h2>
        </dt>
        <dd class="text-2xl font-semibold mt-4 inline-block mr-3">
          <p v-html="itemData.type" />
        </dd>
        <dd class="mt-2 inline-block">
          <p class="text-gray-500" v-html="itemData.age" />
        </dd>
      </dl>

      <div>
        <MapPin :location="itemData.location" />
      </div>
    </div>

    <article class="m-12">
      <div class="flex items-center">
        <span
          class="
            rounded-full
            overflow-hidden
            w-14
            flex flex-row
            justify-between
            mr-6
          "
        >
          <img
            :src="require(`@/assets/${itemData.ownerImage}`)"
            :alt="itemData.ownerName"
            width="100"
            height="100"
          />
        </span>

        <div class="flex-1">
          <h2
            class="flex text-2xl font-semibold"
            v-html="itemData.ownerName"
          ></h2>

          <span class="flex flex-row justify-between text-gray-500">
            <p v-html="itemData.ownerType" />
            <p v-html="itemData.ownerDate" />
          </span>
        </div>
      </div>
      <div v-html="itemData.ownerDescription" class="mt-6" />
    </article>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
import MapPin from "@/components/ui/BasePin";
import arrowBack from "@/assets/icon-arrow-back.svg";
import chevronRight from "@/assets/icon-chevron-right.svg";

export default {
  name: "Detail",
  components: {
    BaseButton,
    MapPin,
  },
  computed: {
    itemData() {
      return this.$store.getters.getCategoryItemById(
        parseInt(this.$route.params.itemId)
      );
    },
    itemId() {
      return this.itemData.id;
    },
    categoryId() {
      return this.itemData.categoryId;
    },
  },
  data() {
    return {
      arrowBack: arrowBack,
      chevronRight: chevronRight,
    };
  },
};
</script>
