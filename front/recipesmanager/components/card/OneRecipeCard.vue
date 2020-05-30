<template>
    <div class="OneRecipeCard row">
      <div class="col-lg-3 col-md-12 col-sm-12 name">
        <h1>{{ name }}</h1>
      </div>
      <div class="col-lg-9 col-md-8 recipeInfos col-sm-4">
        <div class="difficulty">
          <img src="../../assets/img/muscle.png" alt="" class="iconsCardBody">
          <p>Difficulty: </p>
          <p>{{ dificultyNote }}/5 </p>
        </div>  
        <div class="rate">
          <img src="../../assets/img/star.png" alt="" class="iconsCardBody">
          <p>Note: </p>
          <p>{{ likeNote }}/5 </p>
        </div>
        <div class="duration">
          <img src="../../assets/img/duration.png" alt="" class="iconsCardBody">
          <p>Time: </p>
          <p>{{ duration }}min </p>
        </div>
        <div class="price">
          <img src="../../assets/img/price.png" alt="" class="iconsCardBody">
          <p>Price: </p>
          <p>{{ globalPrice }}$</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-8">
        <ul>
          Ingrédients :
          <li v-for="ingredient of listIngredient" :key="ingredient.id">
            - {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <div class="col-lg-9 col-md-12">
        <ul class="ListRecipeImg">
          <li v-for="pathPicture of imgUrl" :key="pathPicture">
            <img :src="require(`@/assets/img/img_recipes/${pathPicture}`)" :alt="`Photo de la recette: ${name}`">
          </li>
        </ul>
      </div>
      <div class="col-lg-12 descrip">
        {{ descrip }}
      </div>
      <div class="col-lg-12">
        {{ descrip }}
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      listItems: ''
    }
  },
  props: {
    name: {
      type: String,
      default:''
    },
    imgUrl: {
      type: Array,
      default: () => ([])
    },
    dificultyNote: {
      type: Number,
      default: 0
    },
    likeNote: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0
    },
    globalPrice: {
      type: Number,
      default: 0
    },
    listIngredient : {
      type: '',
      default: null
    },
    descrip: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss">
.OneRecipeCard {
  padding: 5rem;
  background-color: #B9E4C9;
  ul>li{
    list-style: none;
  }
  h1 {
    font-size: 3.6rem;
  }
  .descrip {
    margin-bottom: 3.6rem;
    &:after {
      content:'';
      margin-top: 2.4rem;
      position: absolute;
      display: block;
      margin: 0 auto;
      bottom: -1.5rem;
      left:0;
      right: 0;
      width: 85%;
      height: 1px;
      background-color:#FD5523;
    }
  }
}
  .recipeInfos{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3.6rem;
    & > div {
      & > img {
        vertical-align: bottom;
        width: 5rem;
        height: 5rem;
      }
      & > img, p {
        display: inline-flex;
        margin-right: .8rem;
        font-size: 2.4rem;
        margin-bottom: 0;
      }
    }
  }
  .ListRecipeImg {
    margin-bottom: 3.6rem;
    li {
      display: inline-block;
      max-width: calc( 100% / 3 - 1rem);
    }
  }

@media (max-width: 769px) {
  .OneRecipeCard{
    padding: 2rem;
  }
  .name{
    margin-bottom: 1.2rem;
  }
  .recipeInfos {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    & > div {
      margin-bottom: 1.2rem;
      width: 50%;
      & > img {
        width: 3rem;
        height: 3rem;
      }
      & > img, p {
        display: inline-flex;
        margin-right: .5rem;
        font-size: 1.6rem;
        margin-bottom: 0;
      }
    }
  }

}
@media (max-width: 480px) {
  .ListRecipeImg {
    margin-bottom: 1.2rem;
    li {
      max-width: 100%;
    }
  }
}
</style>