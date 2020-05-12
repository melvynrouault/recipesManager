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
  </div>
</template>

<script>

import RecipeCardComponent from '~/components/card/RecipeCardComponent.vue';

export default {
  components: {
    RecipeCardComponent,
  }
}
</script>

<style>

.ramenImg {
  width: 200px;
  height: 100px;
}

</style>