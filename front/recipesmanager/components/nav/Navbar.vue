<template>
  <header>
    <div id="anim">
      <nuxt-link to="/">
        <h1>Recipe's Manager &nbsp;</h1>
      </nuxt-link>
      <small>“Le goût des bonnes choses”</small>
    </div>
    <div class="navBar">
      <ul class="nav">
        <li v-if="!$auth.loggedIn">
          <nuxt-link to="/portail">
            <span>Login</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/items">
            <img src="~/assets/img/myItems.png" alt="My items" class="imgNav">
            <span>My Items</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/recettes">
            <img src="~/assets/img/myRecipes.png" alt="My recipes" class="imgNav">
            <span>My Recipes</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/myAccount">
            <img src="~/assets/img/myAccount.png" alt="My account" class="imgNav">
            <span>My Account</span>
          </nuxt-link>
        </li>
        <li>
          <span class="content_search">
            <input aria-label="Input" id="inputFormNav" placeholder="Search...">
            <button type="submit" id="buttonNav">
              <img src="~/assets/img/search.png" alt="search" id="searchNav">
            </button>
          </span>
        </li>
      </ul>
    </div>
  </header>
</template>


<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  small{
    font-size: 1.4rem;
    font-style: italic;
    margin-left: .8rem;
  }
  #anim {
    margin-right: .8rem;
    a{
      text-decoration: none;
    }
    h1 {
      font-size: 5rem;
      color: #356869;
      margin-bottom: .8rem;
      width: 100%;
      border-top: 5px solid #356869;
      border-right: 8px solid #356869;
      border-radius: 0 20px 20px 0;
     } 
  }

  .nav {
    display: inline-flex;
    a {
      color: #356869 ;
    }
    li {
      text-align: center;
      &:not(:last-child){
        margin-right: 4.8rem;
      }
    }
    li  span {
      display: block;
      font-size: 2rem;
    }
  }
}
.imgNav {
  width: 5rem;
  height: 5rem;
}
.content_search {
  padding: 2rem 0;
  position: relative;
}
#buttonNav {
  border: none;
  background: none;
  position: absolute;
  right: .5rem;
  outline: none;
}
#searchNav {
  width: 3.5rem;
  height: 3.5rem;
  filter: brightness(5);
  &:hover, &:target {
    filter: brightness(2);
  }
}
#inputFormNav {
  border-radius: 2rem;
  border: none;
  background-color: #FD5523;
  color: #FFFBE6;
  height: 4rem;
  width: 100%;
  outline: none;
  padding: .8rem 1.6rem;
}
@media (max-width: 769px) {
  header {
        .nav {
      & > li:not(:last-child) {
        margin-right: 0;
      }
      & > li:nth-child(1), li:nth-child(2) {
        width: 50%;
      }
      & > :last-child{
        width: 100%;
      }
    }
  }

}
@media (max-width: 480px) {
  header {
    display: block;

    & > :first-child{
      margin-bottom: 2.4rem;
    }
  }
  #buttonNav {
    right: 1.5rem;
  }
}
</style>
