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
    {{ itemData.id }}
    {{ itemData.categoryId }}
    <h1>{{ itemData.name }}</h1>
    {{ itemData.type }}
    {{ itemData.age }}
    <img :src="pin" />
    {{ itemData.location }}

    <img
      :src="require(`@/assets/${itemData.ownerImage}`)"
      :alt="itemData.ownerName"
      width="100"
      height="100"
    />
    {{ itemData.ownerName }}
    {{ itemData.ownerType }}
    {{ itemData.ownerDate }}
    {{ itemData.ownerDescription }}
    
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
