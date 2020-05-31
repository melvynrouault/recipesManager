<template>
  <div>
      <div class="row">
        <RecipeCardComponent v-for="recette of filteredRecipes" :key="recette._id"
          :name="recette.name" 
          :dificultyNote="recette.difficulty" 
          :likeNote="recette.note"
          :duration="recette.duration"
          :imgUrl="recette.pictures[0]"
          :globalPrice="recette.totalPrice"
          :descrip="excerpt(recette.description)"
        />
      </div>
  </div>
</template>

<script>

import RecipeCardComponent from '~/components/card/RecipeCardComponent.vue';

export default {
  data() {
    return {
      recettes: [],
      exerptDiscrip: '',
      researchedRecipe: ''
    }
  },
  computed: {
    filteredRecipes: function() {
      // console.log(`THIS.RECETTES : ${JSON.stringify(this.recettes)}`);
      let researchedRecipeInForm = this.researchedRecipe;
      this.researchedRecipe = '';
      return this.recettes.filter((recette) => {
        // console.log(`RECETTE IN FILTER ${JSON.stringify(recette)}`);
        // console.log(`RECETTE NAME IN FILTER ${recette.name}`);
        return recette.name.match(researchedRecipeInForm);
      });
    }
  },
  components: {
    RecipeCardComponent,
  },
  async fetch ({ store, params }) {
    await store.dispatch('recette/getAllRecipes');
  },
  created() {
      this.recettes = this.$store.getters['recette/getAllRecipes'];
      console.log(this.recettes)
    this.$nuxt.$on('search-recipe', (dataSearched) => {
      this.researchedRecipe = dataSearched;
    })
  },
  mounted() {
    this.$nuxt.$on('reset-homepage', () => {
      this.$store.dispatch('recette/getAllRecipes');
      this.recettes = this.$store.getters['recette/getAllRecipes'];
    })
  },
  methods: {
    excerpt(chaine){
      const words = chaine.split(' ', 30);
      const returnWord = words.join(' ') + (chaine.length > 30 ? '...' : '');
      return returnWord
    }
  }
}
</script>

<style>

.ramenImg {
  width: 200px;
  height: 100px;
}

</style>