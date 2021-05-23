<template>
  <div>
    <BaseButton route="index" :id="categoryId" type="router-link" text="Back" />
    <BaseButton
      route="enquire"
      :id="itemId"
      type="router-link"
      text="Enquire"
    />
    <img :src="itemData.image" :alt="itemData.alt" class="w-" />

    <dl>
      <dt>
        <h1>{{ itemData.name }}</h1>
      </dt>
      <dd><p v-html="itemData.type" /></dd>
      <dd><p v-html="itemData.age" /></dd>
      <dd>
        <MapPin :location="itemData.location" />
      </dd>
    </dl>

    <article>
      <h2 clas="heading">
        <img
          :src="require(`@/assets/${itemData.ownerImage}`)"
          :alt="itemData.ownerName"
          width="100"
          height="100"
        />
        {{ itemData.ownerName }}
        <span class="subheading">{{ itemData.ownerType }}</span>
      </h2>
      <p v-html="itemData.ownerDate" />
      <div v-html="itemData.ownerDescription" />
    </article>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';
import MapPin from '@/components/ui/BasePin';

export default {
  name: 'Detail',
  components: {
    BaseButton,
    MapPin
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
    }
  }
};
</script>
