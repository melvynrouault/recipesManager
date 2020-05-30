<template>
  <div>
    <h1>Create a recipe</h1>
    <div>
      <div class="div_form_add_item">
        <h2>Please fill the form !</h2>
        <br/>
        <form class="form" action="post" id="form_add_item"> <!-- @submit.prevent="Login"  -->
          <input v-model="recipe.name" type="text" name="text" placeholder="Name of the recipe..." required>
          <textarea rows = "10" cols = "150" name="description">
            Enter details here...
          </textarea>
          <br>
          <h3>Ingredients</h3>
           <select id="ingredients" name="ingredients">
                <option value="choux-fleur">choux</option>
                <option value="etc">etc</option>
                <option value="etc1">etc1</option>
                <option value="etc2">etc2</option>
            </select>
            <!-- Difficulty -->
            <br>
            <br>
            <br>
            <h3>Difficulty</h3>
            <div class="radioButton">
                <input type="radio" id="un" name="difficulty" value="un">
                <label for="male">1</label>
                <input type="radio" id="deux" name="difficulty" value="deux">
                <label for="female">2</label>
                <input type="radio" id="trois" name="difficulty" value="trois">
                <label for="other">3</label>
                <input type="radio" id="quatre" name="difficulty" value="quatre">
                <label for="other">4</label>
                <input type="radio" id="cinq" name="difficulty" value="cinq">
                <label for="other">5</label>
            </div>
            <br>
            <h3>Duration</h3>
            <input type="time" id="duration" name="duration" min="00:00" max="48:00">
            <br>
            <h3>Pictures</h3>
            <input type="file" id="picture1" name="pictures" accept="image/png, image/jpeg">
            <input type="file" id="picture2" name="pictures" accept="image/png, image/jpeg">
            <input type="file" id="picture3" name="pictures" accept="image/png, image/jpeg">
            <input type="file" id="picture4" name="pictures" accept="image/png, image/jpeg">
            <input type="file" id="picture5" name="pictures" accept="image/png, image/jpeg">
            <br>
            <h3>Visibility</h3>
            <div class="radioButton">
                <input type="radio" id="true" name="visibility" value="true">
                <label for="male">true</label>
                <input type="radio" id="false" name="visibility" value="false">
                <label for="female">false</label>
            </div>

        </form>
        <br/>
        <button form="form_add_item" class="btn">Create !</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        name: '',
        description: '',
        ingredients: '',
        price: '', //implémenter la méthode de Dylan
        note: '', //pas besoin à la création
        difficulty: '',
        duration: '',
        pictures: '',
        isPublic: '',
        totalPrice: ''
      }
    }
  },
  //middleware: 'auth', késkesé
  async created() {
    let data = {
        name: this.recipe.name,
        description: this.recipe.description,
        ingredients: this.recipe.ingredients,
        price: this.recipe.price,
        note: this.recipe.note,
        difficulty: this.recipe.difficulty,
        duration: this.recipe.duration,
        pictures: this.recipe.pictures,
        isPublic: this.recipe.isPublic,
        totalPrice: this.recipe.totalPrice,
      }
      /*let dataLog = {
        email: this.register.email,
        pswd : this.register.pswd
      }*/
      try {
        this.$axios.post('/item/new', data )
        this.$router.push('/') //router push ??
      } catch (e) {
          //eventuellement mettre si c'ets pas un number
      }
  },
}
</script>

<style lang="scss">
  .div_form_add_item {
    & > p {
      display: inline-block;
    }
  }

  .form {
  //min-height: 15rem;
  input{
    margin: 10px;
    width: 270px;
    background-color:#B9E4C9;
    border: 1px solid #FD5523;
    padding: .4rem .8rem;
    display: block;
  }

  textarea{
    margin: 10px;
    background-color:#B9E4C9;
    border: 1px solid #FD5523;
    padding: .4rem .8rem;
    display: block;
  }

  #duration{
    width: auto;
  }

  .radioButton{
    display: flex;

    input{
        width: 50px;
        margin: 0;
    }
  }
}

  .btn {
    width: 15rem;
    background-color: #FD5523;
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0 auto;
    transition: .4s ease all;
    &:hover {
      background-color: rgb(255, 131, 93);
    }
  }
</style>