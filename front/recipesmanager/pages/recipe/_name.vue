<template>
  <div class="">
    <OneRecipeCard 
      :name="recette.name" 
      :dificultyNote="recette.difficulty" 
      :likeNote="recette.note"
      :duration="recette.duration"
      :ingredients="recette.ingredients"
      globalPrice="45$"
      :descrip="recette.description"
    />
  </div>
</template>

<script>
import OneRecipeCard from '~/components/card/OneRecipeCard.vue';

export default {
  components: {
    OneRecipeCard
  },
  data() {
    return {
      recette: {}
    }
  },
  async fetch ({ store, params, route }) {
    await store.dispatch('recette/getOneRecipe', {name : route.params.name });
  },
  created() {
      this.recette = this.$store.getters['recette/getOneRecipe'];
      // console.log(JSON.stringify(this.recette))
  },
}
</script>

<style>

</style>