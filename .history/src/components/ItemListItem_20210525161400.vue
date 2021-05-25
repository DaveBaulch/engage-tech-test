<template>
  <li class="mb-6 rounded-md">
    <router-link
      :to="{ name: 'detail', params: { itemId: itemData.id } }"
      class="list-item"
    >
      <article class="flex bg-white rounded-md shadow-xl">
        <div class="rounded-tl-md rounded-bl-md rounded-br-50">
          <img :src="itemData.image" :alt="itemData.name" />
        </div>
        <div class="p-8">
          <dl>
            <dt>
              <h2 class="text-2xl font-bold mt-2">{{ itemData.name }}</h2>
            </dt>
            <dd class="text-l font-semibold mt-4">
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
    </router-link>
  </li>
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
