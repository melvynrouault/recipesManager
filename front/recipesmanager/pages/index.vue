<template>
  <div>
      <div class="row">
        <RecipeCardComponent v-for="recette of recettes" :key="recette._id"
          :name="recette.name" 
          :dificultyNote="recette.difficulty" 
          :likeNote="recette.note"
          :duration="recette.duration"
          globalPrice="150"
          :descrip="recette.description"
        />
      </div>
  </div>
</template>

<script>

import RecipeCardComponent from '~/components/card/RecipeCardComponent.vue';

export default {
  data() {
    return {
      recettes: {},
    }
  },
  components: {
    RecipeCardComponent,
  },
  mounted() {
    this.$store.dispatch('recette/getAllRecipes');
    setTimeout(() => { 
      this.recettes = this.$store.getters['recette/getAllRecipes'];
    }, 50);
  },
}
</script>

<style>

.ramenImg {
  width: 200px;
  height: 100px;
}

</style>