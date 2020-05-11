<template>
  <div>
    <div>
      <Navbar/>
    </div>
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
import Navbar from '~/components/nav/Navbar';
import RecipeCardComponent from '~/components/card/RecipeCardComponent.vue';

export default {
  components: {
    Navbar,
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