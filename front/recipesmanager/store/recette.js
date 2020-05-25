import axios from 'axios';

export const state = {
  recipes: {},
  recipe: {},
  // itemsRecipe : {}
}

export const getters = {
  getAllRecipes(state) {
    return state.recipes;
  },
  getOneRecipe(state) {
    return state.recipe;
  },
  // getItemsRecipe(state) {
  //   return state.itemsRecipe;
  // }
}

export const mutations = {
  SET_ALL_RECIPES(state, recipes) {
    state.recipes = recipes;
  },
  SET_ONE_RECIPE(state, recipe) {
    state.recipe = recipe;
  },
  // ADD_ITEM_RECIPE(state, itemsRecipe) {
  //   state.itemsRecipe.push(itemsRecipe);
  // }
}

export const actions = {

  async getAllRecipes({commit}) {
    await axios.get(process.env.baseUrl + '/recettes')
    .then((response) => {
      // console.log(`[API CALL RECIPE] OK`);
      // console.log(`RESPONSE DATA ${JSON.stringify(response.data)}`);
      commit('SET_ALL_RECIPES', response.data);
    })
    // In case of errors
    .catch(err => {
      console.log(`[API CALL RECIPE] ERROR`, err.message);
      throw new Error(`${err}`);
    })
  },
  async getOneRecipe({commit}, {name}) {

    let recipeName = name;

    await axios.get(process.env.baseUrl + `/recette/${recipeName}`)
    .then((response) => {

      // // je recupère les id des items stocké en db
      // response.data.ingredients.forEach(item => {
      //     console.log("ITEM BASE " + JSON.stringify(item))

      //     // je vais chercher l'item correspondant à l'id
      //     axios.get(process.env.baseUrl + `/item/${item}`).then((response) => {

      //     // Je l'attribue
      //     item = response.data;

      //     console.log("ITEM FIN " + JSON.stringify(item))
      //   })
      // });

      // je check si les items sont bien passés.
        // console.log("NEW DATA INGREDIENT" + JSON.stringify(response.data.ingredients));
        commit('SET_ONE_RECIPE', response.data);



      })
      .catch(err => {
        console.log(`[API CALL ON RECIPE] ERROR`, err.message);
        throw new Error(`${err}`);
    })
  },
}