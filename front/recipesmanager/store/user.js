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
    const token = localStorage.getItem('authToken');
    console.log(`TOKEN ${token}`);
    
    // Just decode the token 
    const decoded = jwt.decode(token);
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
        commit('SET_USER', response.data);
      })
      // In case of errors
      .catch(err => {
        console.log(`[API CALL USER] ERROR`, err.message);
        throw new Error(`${err}`);
      })
  }
}