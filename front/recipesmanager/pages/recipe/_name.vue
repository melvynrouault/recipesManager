<template>
  <div class="">
    <OneRecipeCard 
      :name="recette.name" 
      :dificultyNote="recette.difficulty" 
      :likeNote="recette.note"
      :duration="recette.duration"
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
      name: this.$route.params.name,
      recette: {}
    }
  },
  mounted() {
    this.$store.dispatch('recette/getOneRecipe', {name : this.name});
    setTimeout(() => { 
      this.recette = this.$store.getters['recette/getOneRecipe'];
      console.log(JSON.stringify(this.recette))
    }, 50);
  },
}
</script>

<style>

</style>