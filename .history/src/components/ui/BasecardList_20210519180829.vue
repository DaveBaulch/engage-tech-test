<template>
  <article class="section card-list-block">
    <div class="container">
      <div class="card-list">
        <div class="card-list__heading">
          <h2>{{ block.content.title }}</h2>
        </div>

        <ol class="card-list__list">
          <li
            class="card-list__item"
            v-for="item in block.content.data"
            :key="item.id"
          >
            <CardListCard :itemData="item" />
          </li>
        </ol>
      </div>
    </div>
  </article>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue';

export default {
  name: 'BaseCardList',
  props: {
    block: Object
  },
  components: {
    BaseCard
  }
};
</script>

<style scoped>

}
</style>
