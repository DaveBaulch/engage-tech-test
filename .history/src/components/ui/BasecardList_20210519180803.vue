<template>

  <article class="section card-list-block">

    <div class="container">

      <div class="card-list">

        <div class="card-list__heading">
          <h2>{{ block.content.title }}</h2>
        </div>

        <ol class="card-list__list">

          <li class="card-list__item" v-for="item in block.content.data" :key="item.id">
            <CardListCard :itemData="item" />
          </li>

        </ol>

      </div>

    </div>

  </article>

</template>

<script>
import lazyloadPicturefillBackground from 'lazyload-picturefill-background';
import CardListCard from '@/components/ui/CardListCard.vue';

export default {
  name: 'CardList', 
  props: {
    block: Object
  },
  components: {
    CardListCard
  }
};
</script>

<style scoped>

}

</style>