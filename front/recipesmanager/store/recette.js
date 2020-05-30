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
  ADD_OBJECT_ITEM_RECIPE(state, item, index) {
    state.recipe.ingredients.splice(index, 0, item);
  }
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

      let ArrayLength = response.data.ingredients.length;
      for (let i = 0; i < ArrayLength; i++) {
        const currentItemId = response.data.ingredients[i].id;
        axios.get(process.env.baseUrl + `/item/${currentItemId}`).then((resp) => {
          const aliment = resp.data;
          commit('ADD_OBJECT_ITEM_RECIPE', aliment , i);
        })
      }
        response.data.ingredients = [];
        commit('SET_ONE_RECIPE', response.data);
      })
      .catch(err => {
        throw new Error(`${err}`);
    })
  },
}