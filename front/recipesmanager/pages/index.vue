<template>
  <div>
      <div class="row">
        <RecipeCardComponent/>
        <RecipeCardComponent/>
        <RecipeCardComponent/>
        <RecipeCardComponent/>
        <RecipeCardComponent/>
        <RecipeCardComponent/>
        <RecipeCardComponent/>
        <RecipeCardComponent/>
        <RecipeCardComponent/>
      </div>
      <div>
        <!-- <pre>{{ getAllRecipes() }}</pre> -->
        <p>{{ this.recettes }}</p>
      </div>
  </div>
</template>

<script>

import RecipeCardComponent from '~/components/card/RecipeCardComponent.vue';

export default {
  data() {
    return {
      recettes: this.$store.getters['recette/getAllRecipes'],
    }
  },
  
  components: {
    RecipeCardComponent,
  },

  created() {
    this.$store.dispatch('recette/getAllRecipes');
  },
}
</script>

<style>

.ramenImg {
  width: 200px;
  height: 100px;
}

</style>