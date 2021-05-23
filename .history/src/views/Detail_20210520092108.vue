<template>
  <div>
    <h1>This is the item detail page</h1>
    <BaseButton
      route: "index"
      :id: categoryId
      type="router-link"
      text="Back"
    /></BaseButton>
    <BaseButton
      route: "enquire"
      :id: itemData.id
      type="router-link"
      text="Enquire"
    ></BaseButton>
    <hr />
    {{ itemData }}
    <img :src="itemData.image" :alt="itemData.alt" />
    {{ itemData.id }}
    {{ itemData.categoryId }}
    {{ itemData.name }}
    {{ itemData.type }}
    {{ itemData.age }}
    {{ itemData.location }}
    {{ itemData.ownerName }}
    {{ itemData.ownerType }}
    {{ itemData.ownerDate }}
    {{ itemData.ownerDescription }}
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';

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
    categoryId() {
      return this.itemData.categoryId;
    }
  }
};
</script>
