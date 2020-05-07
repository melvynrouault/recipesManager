<template>
  <div class="container">
      <div>
        <h1>Recipe's Manager</h1>
      </div>
      <div class="navBar">
        <b-nav>
          <b-nav-item><img src="~/assets/img/myRecipes.png" alt="My recipes" class="imgNav"><br> My Recipes</b-nav-item>
          <b-nav-item><img src="~/assets/img/myAccount.png" alt="My account" class="imgNav"><br> My Account</b-nav-item>
          <b-nav-form>
            <b-form-input aria-label="Input" id="inputFormNav"></b-form-input>
            <b-button type="submit" id="buttonNav"><img src="~/assets/img/search.png" alt="search" id="searchNav"></b-button>
          </b-nav-form>
        </b-nav>
      </div>
    </div>
</template>


<style>
.container {
  margin-top: 1%;
  display: flex;
  text-align: center;
}
.navBar {
  justify-content: space-between;
}
.imgNav {
  width: 50px;
  height: 50px;
}
#searchNav {
  width: 35px;
  height: 35px;
  background-color: white;
}
#buttonNav {
  background-color: white;
  border: none;
}
#inputFormNav {
  border-radius: 20px;
}
</style>
