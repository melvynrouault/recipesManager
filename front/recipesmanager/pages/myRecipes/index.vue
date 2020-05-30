<template>
  <div>
    MY RECIPES
    
    <AddRecipeCard/>
  </div>
</template>

<script>
import AddRecipeCard from '~/components/card/AddRecipeCard.vue';

export default {
  components: {
    AddRecipeCard
  },

  middleware: 'auth',
}
</script>

<style>

</style>