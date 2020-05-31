import axios from 'axios';

export const state = {
  recipes: {},
  recipe: {}
}

export const getters = {
  getAllRecipes(state) {
    return state.recipes;
  },
  getOneRecipe(state) {
    return state.recipe;
  }
}

export const mutations = {
  SET_ALL_RECIPES(state, recipes) {
    state.recipes = recipes;
  },
  SET_ONE_RECIPE(state, recipe) {
    state.recipe = recipe;
  }
}

export const actions = {

  async getAllRecipes({ commit }) {
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
  async getOneRecipe({ commit }, { name }) {

    let recipeName = name;

    await axios.get(process.env.baseUrl + `/recette/${recipeName}`)
    .then((response) => {
      // console.log('[API CAL ONE RECIPE] OK')
      commit('SET_ONE_RECIPE', response.data);
      })
      .catch(err => {
        console.log(`[API CALL ON RECIPE] ERROR`, err.message);
        throw new Error(`${err}`);
    })
  },
}