import jwt from 'jsonwebtoken';
import axios from 'axios';

export const state = {
  user: {},
}

export const getters = {
  getOneUser(state) {
    return state.user;
  }
}

export const mutations = {
  SET_ONE_USER(state, user) {
    state.user = user;
  }
}

export const actions = {
  async fetchUser({commit}) {
    
    // Get the token stored in LocalStorage
    let token = localStorage.getItem('auth._token.local').split(' ');
    console.log(token[1]);
  
    // Just decode the token 
    const decoded = jwt.decode(token[1]);
    console.log(`DECODED ${JSON.stringify(decoded)}`);

    // Get the id of the user
    const idUser = decoded.id;
    console.log(idUser);
    
    console.log(`[API CALL USER] fetch User`);

    // Axios GET request
    await axios.get(process.env.baseUrl + `/user/${idUser}`)
      // In case of no errors
      .then((response) => {
        console.log(`[API CALL USER] OK`);
        commit('SET_ONE_USER', response.data);
      })
      // In case of errors
      .catch(err => {
        console.log(`[API CALL USER] ERROR`, err.message);
        throw new Error(`${err}`);
      })
  }
}