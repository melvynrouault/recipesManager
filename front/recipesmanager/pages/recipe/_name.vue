<template>
  <div class="">
    <!-- Le prix est défini lors de la création d'une recette par la somme du prix des items la composant. -->
    <OneRecipeCard
      :imgUrl="recette.pictures"
      :name="recette.name" 
      :dificultyNote="recette.difficulty" 
      :likeNote="recette.note"
      :duration="recette.duration"
      :globalPrice="recette.totalPrice"
      :listIngredient="recette.ingredients"
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
      recette: {},
      items: [],
      route: this.$route.params.name
    }
  },
  // async fetch ({ store, params, route }) {
  //   await store.dispatch('recette/getOneRecipe', {name : route.params.name });
  // },
  async created() {
      await this.$store.dispatch('recette/getOneRecipe', {name : this.route });
      this.recette = this.$store.getters['recette/getOneRecipe'];
        console.log('MY RECIPE ' + JSON.stringify(this.recette));
      // console.log(JSON.stringify(this.recette))
  },
}
</script>

<style>

</style>