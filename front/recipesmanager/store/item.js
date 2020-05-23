import axios from 'axios';

export const state = {
  items: {},
  item: {}
}

export const getters = {
  getAllItems(state) {
    return state.items;
  },
  getOneItem(state) {
    return state.item;
  }
}

export const mutations = {
  SET_ALL_ITEMS(state, items) {
    state.items = items;
  },
  SET_ONE_ITEM(state, item) {
    state.item = item;
  }
}

export const actions = {

  async getAllItems({commit}) {
    await axios.get(process.env.baseUrl + '/items')
    .then((response) => {
      commit('SET_ALL_ITEMS', response.data);
    })
    // In case of errors
    .catch(err => {
      console.log(`[API CALL ITEM] ERROR`, err.message);
      throw new Error(`${err}`);
    })
  },
  async getOneItem({commit}, {name}) {

    let itemName = name;

    await axios.get(process.env.baseUrl + `/item/${itemName}`)
    .then((response) => {
      // console.log('[API CAL ONE RECIPE] OK')
      commit('SET_ONE_ITEM', response.data);
      })
      .catch(err => {
        console.log(`[API CALL ON ITEM] ERROR`, err.message);
        throw new Error(`${err}`);
    })
  }
}