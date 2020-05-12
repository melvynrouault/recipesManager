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
        <p>{{ this.recettes }}</p>
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
    }, 0);
    
  },
}
</script>

<style>

.ramenImg {
  width: 200px;
  height: 100px;
}

</style>