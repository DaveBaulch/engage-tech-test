<template>
  <div>
    <BaseButton
      route="index"
      :id="categoryId"
      type="router-link"
      text="Back"
      class="absolute top-4 left-4"
    />
    <BaseButton
      route="enquire"
      :id="itemId"
      type="router-link"
      text="Enquire"
      class="absolute top-4 right-4"
    />
    <img :src="itemData.image" :alt="itemData.alt" class="w-screen" />

    <div class="p-20 -mt-20 rounded-3xl bg-white flex">
      <dl>
        <dt>
          <h2 class="text-4xl font-bold mt-2">{{ itemData.name }}</h2>
        </dt>
        <dd class="text-2xl font-semibold mt-4">
          <p v-html="itemData.type" />
        </dd>
        <dd class="mt-2">
          <p class="text-gray-500" v-html="itemData.age" />
        </dd>
      </dl>
      <div>
        <MapPin :location="itemData.location" />
      </div>
    </div>

    <article>
      <div class="flex">

        <h2 class="flex">
          <span
            class="
              rounded-full
              overflow-hidden
              w-24
              flex
              items-center
              justify-center
            "
          >
            <img
              :src="require(`@/assets/${itemData.ownerImage}`)"
              :alt="itemData.ownerName"
              width="100"
              height="100"
            />
          </span>
          <span class="flex flex-col"></span>
          <span v-html="itemData.ownerName" />
          <span v-html="itemData.ownerType" />
          </span>
        </h2>

        <p v-html="itemData.ownerDate" />
      </div>
      <div v-html="itemData.ownerDescription" />
    </article>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
import MapPin from "@/components/ui/BasePin";

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
};
</script>
