<template>
  <div>
    MY RECIPES
    <br>
    <div class="row">
      <AddRecipeCard/>
        <RecipeCardComponent v-for="recette of recettes" :key="recette._id"
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
import AddRecipeCard from '~/components/card/AddRecipeCard.vue';
import RecipeCardComponent from '~/components/card/RecipeCardComponent.vue';

export default {
  data() {
    return {
      recettes: {},
      exerptDiscrip: ''
    }
  },
  components: {
    AddRecipeCard,
    RecipeCardComponent
  },

  middleware: 'auth',

  async fetch ({ store, params }) {
    await store.dispatch('recette/getAllRecipes');
  },
  created() {
      this.recettes = this.$store.getters['recette/getAllRecipes'];
      console.log(this.recettes)
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