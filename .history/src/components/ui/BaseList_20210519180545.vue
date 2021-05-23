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
  },
  created() {
    this.$nextTick(() => {
      new lazyloadPicturefillBackground(); 
    })          
  },   
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

.card-list {
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
}

.card-list__heading {
  text-align: center;
}

.card-list__list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  list-style-type: none;
}

.card-list__btn {
  margin-bottom: 2rem;
  margin-right: 0;

  @include breakpoint(md) {
    align-self: flex-start;
    margin-bottom: 0;
    position: absolute;
    right: 1.2rem;
    top: 5rem;
  }
}

.card-list__item {
  position: relative;
  width: 100%;
  min-height: 1px;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  padding: 0;

  @include breakpoint(md) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @include breakpoint(lg) {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

</style>