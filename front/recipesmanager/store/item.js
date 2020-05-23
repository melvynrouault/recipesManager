import axios from 'axios';

export const state = {
  items: {},
  item: {}
}

export const getters = {
  getAllRecipes(state) {
    return state.items;
  },
  getOneRecipe(state) {
    return state.item;
  }
}

export const mutations = {
  SET_ALL_RECIPES(state, items) {
    state.items = items;
  },
  SET_ONE_RECIPE(state, item) {
    state.item = item;
  }
}

export const actions = {

  async getAllItems({commit}) {
    await axios.get(process.env.baseUrl + '/items')
    .then((response) => {
      commit('SET_ALL_RECIPES', response.data);
    })
    // In case of errors
    .catch(err => {
      console.log(`[API CALL RECIPE] ERROR`, err.message);
      throw new Error(`${err}`);
    })
  },
  async getOneItem({commit}, {name}) {

    let itemName = name;

    await axios.get(process.env.baseUrl + `/recette/${itemName}`)
    .then((response) => {
      // console.log('[API CAL ONE RECIPE] OK')
      commit('SET_ONE_RECIPE', response.data);
      })
      .catch(err => {
        console.log(`[API CALL ON RECIPE] ERROR`, err.message);
        throw new Error(`${err}`);
    })
  }
}