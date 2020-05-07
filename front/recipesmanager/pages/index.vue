<template>
  <div>
    <div>
      <Navbar/>
    </div>
    <b-card-group columns class="body">
      <RecipeCardComponent/>
      <RecipeCardComponent/>
      <RecipeCardComponent/>
      <RecipeCardComponent/>
      <RecipeCardComponent/>
      <RecipeCardComponent/>
      <RecipeCardComponent/>
      <RecipeCardComponent/>
      <RecipeCardComponent/>
    </b-card-group>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import RecipeCardComponent from '~/components/RecipeCardComponent.vue';

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
.body {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
}
</style>