<template>
  <div>
    <BaseButton route="index" :id="categoryId" type="router-link" text="Back" />
    <BaseButton
      route="enquire"
      :id="itemId"
      type="router-link"
      text="Enquire"
    />
    <img :src="itemData.image" :alt="itemData.alt" />

    <dl>
      <dt>
        <h1>{{ itemData.name }}</h1>
      </dt>
      <dd><p v-html="itemData.type" /></dd>
      <dd><p v-html="itemData.age" /></dd>
      <dd>
        <img :src="pin" alt="" />
        <p v-html="itemData.location" />
      </dd>
    </dl>

    <img
      :src="require(`@/assets/${itemData.ownerImage}`)"
      :alt="itemData.ownerName"
      width="100"
      height="100"
    />
    <h2>{{ itemData.ownerName }}</h2>
    <p v-html="itemData.ownerType" />
    <p v-html=" itemData.ownerDate />
    <div v-html="itemData.ownerDescription" />
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';
import mapPin from '@/assets/icon-map-pin.svg';

export default {
  name: 'Detail',
  components: {
    BaseButton
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
  },
  data() {
    return {
      pin: mapPin
    };
  }
};
</script>
