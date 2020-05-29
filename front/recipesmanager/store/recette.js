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
  ADD_OBJECT_ITEM_RECIPE(state, item, i) {
    state.recipe.ingredients.splice(i, 0, item);
  },
  ADD_TOTAL_PRICE_RECIPE(state, itemPrice) {
    state.recipe.price += itemPrice;
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


    // let resRecipe = await axios.get(process.env.baseUrl + `/recette/${recipeName}`);
    // let resItem = await axios.get(process.env.baseUrl + `/items`);
    // let data = resRecipe.data;
    // let dataItem = resItem.data;

    // console.log(JSON.stringify(data));
    // data.map(([data, dataItem
    // ]) => this.convert(data, dataItem));
    // console.log(JSON.stringify(dataItem));
    // 

    // for (let i = 0; i < data.ingredients.length; i++) {
    //   const currentItem = data.ingredients[i];
    //   // console.log(JSON.stringify(currentItem.id));
    //   const itemID = currentItem.id;
    //   const item = dataItem.find( aliment => aliment.id = itemID );
    //   console.log('itemID : ' + itemID);
    //   console.log('item : ' + JSON.stringify(item));
    //   // data.ingredient[i] = item;
    //   itemID = null;
    //   // console.log(JSON.stringify(item))
    // }
    // let i = 0;
    // data.ingredients.forEach(element => {
    //   element = dataItem.find( item => item.id = element.id);
    //   console.log(JSON.stringify(element));
    //   data.ingredients.splice(i, 1, element);
    //   i++;
    // });
    // console.log(JSON.stringify(data));
    // console.log( 'FINAL' +  JSON.stringify(data))
    await axios.get(process.env.baseUrl + `/recette/${recipeName}`)
    .then((response) => {

      let ArrayLength = response.data.ingredients.length;
      for (let i = 0; i < ArrayLength; i++) {
        const currentItemId = response.data.ingredients[i].id;
        axios.get(process.env.baseUrl + `/item/${currentItemId}`).then((resp) => {
          // Je l'attribue
          const aliment = resp.data;
          const alimentPrice = resp.data.price;
          console.log('ALIMENT :::: ' + JSON.stringify(aliment))
          
          commit('ADD_OBJECT_ITEM_RECIPE', aliment , i);
        })        
      }
      // je check si les items sont bien passés.
        console.log("NEW DATA INGREDIENT" + JSON.stringify(response.data.ingredients));
        commit('SET_ONE_RECIPE', response.data);



      })
      .catch(err => {
        console.log(`[API CALL ON RECIPE] ERROR`, err.message);
        throw new Error(`${err}`);
    })
  },
}