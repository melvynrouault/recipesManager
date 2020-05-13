<template>
  <div>
    {{ name }}
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
    this.$store.dispatch('recette/getOneRecipe', {name : this.$route.params.name});
    setTimeout(() => { 
      this.recette = this.$store.getters['recette/getOneRecipe'];
      console.log('CALL' + this.recette)
    }, 0);
  },
}
</script>

<style>

</style>