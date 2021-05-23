<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton route="index" :id="categoryId" type="router-link" text="Back" />
    <BaseButton
      route="enquire"
      :id="itemId"
      type="router-link"
      text="Enquire"
    />
    <hr />
    {{ itemData }}
    <img :src="itemData.image" :alt="itemData.alt" />
    {{ itemData.id }}
    {{ itemData.categoryId }}
    {{ itemData.name }}
    {{ itemData.type }}
    {{ itemData.age }}
    <img :src="pin" />
    {{ itemData.location }}
    {{ itemData.ownerName }}
    {{ itemData.ownerImage }}
    {{ itemData.ownerType }}
    {{ itemData.ownerDate }}
    {{ itemData.ownerDescription }}
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';
import mapPin from '@/assets/icon-map-pin.svg';
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
