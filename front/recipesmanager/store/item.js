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
  async getOneItem({commit}, {id}) {

    let itemId = id;
    console.log("ID ITEM: " + itemId);
    await axios.get(process.env.baseUrl + `/item/${itemId}`)
    .then((response) => {
      // console.log('[API CAL ONE RECIPE] OK')
      console.log("LA RESPONSE DATA : "+ JSON.stringify(response.data)) 
      commit('SET_ONE_ITEM',JSON.stringify(response.data));
      })  
      .catch(err => {
        console.log(`[API CALL ON ITEM] ERROR`, err.message);
        throw new Error(`${err}`);
    })
  }
}