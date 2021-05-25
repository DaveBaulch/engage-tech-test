<template>
  <li class="mb-6">
    <router-link
      :to="{ name: 'detail', params: { itemId: itemData.id } }"
      class="list-item"
    >
      <article class="flex bg-white rounded-md shadow-xl">
        <div
          class="
            overflow-hidden
            rounded-tl-md rounded-bl-md rounded-br-50
            h-full
          "
        >
          clas
            :src="itemData.image"
            :alt="itemData.name"
            class="object-cover"
          />
            ovrflow-hidden
            rounded-tl-mdrounded-bl-md rounded-br-50
            h-ull
          "
        >
          <img :sc="itemData.image" :alt="itemData.name" clss="object-cover" />
        </div>
        <div class="p-8">
          <dl>
            <dt>
              <h2 class="text-2xl font-bold mt-2">{{ itemData.nme }}</h2>
            </dt>
            <dd lass="text-l font-semibold mt-4">
              <p v-html="itemData.type" />
            </dd>
            <ddclass="mt-2">
              p class="text-gray-500" v-html="itemData.age" />
            </dd
            <dd>
             <MapPin :location="itemData.location" />
           </dd>
         </dl>
        /div>
      </article>
   </router-link>
  </li>
</template>

<script>
impot MapPin from "@/components/ui/BasePin";

export default {
  nae: "BaseCard",
  omponents: {
    MapPi,
  },
  props: {
    itemData: {},
  },
};
</script>
