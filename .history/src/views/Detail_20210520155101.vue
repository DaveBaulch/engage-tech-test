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

    <div
      class="
        p-6
        m-6
        -mt-10
        rounded-md
        bg-white
        relative
        overflow-hidden
        shadow-xl
      "
    >
      <dl>
        <dt>
          <h2 class="text-4xl font-bold mt-2">{{ itemData.name }}</h2>
        </dt>
        <dd class="text-2xl font-semibold mt-4 inline-block mr-6">
          <p v-html="itemData.type" />
        </dd>
        <dd class="mt-2 inline-block">
          <p class="text-gray-500" v-html="itemData.age" />
        </dd>
      </dl>
    </div>
    <div>
      <MapPin :location="itemData.location" />
      </div>
    </div>

    <article class="m-6">
      <div class="flex">
        <span
          class="
            rounded-full
            overflow-hidden
            w-24
            flex
            items-center
            justify-center
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
