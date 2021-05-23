<template>
  <router-link :to="{ name: 'detail', params: { itemId: itemData.id } }">
    <li class="mt-6 overflow-hidden rounded-xl">
      <article class="flex bg-white overflow-hidden rounded-md">
        <div class="overflow-hidden rounded-br-50">
          <img :src="itemData.image" :alt="itemData.name" />
        </div>
        <div class="p-10">
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
            <dd>
              <MapPin :location="itemData.location" />
            </dd>
          </dl>
        </div>
      </article>
    </li>
  </router-link>
</template>

<script>
import MapPin from "@/components/ui/BasePin";

export default {
  name: "BaseCard",
  components: {
    MapPin,
  },
  props: {
    itemData: {},
  },
};
</script>

<style scoped></style>
