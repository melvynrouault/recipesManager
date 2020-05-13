<template>
  <div>
    {{ recette.name }}
  </div>
</template>

<script>
export default {
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
    }, 50);
  },
}
</script>

<style>

</style>