import {throwBadRequest,  sendOK, sendOKWithData, sendCreated, throwIntServerError } from '../xdk/XresHandler';
import RecipeModel from '../models/recipeModel';

export const addRecipe = async (req, res) => {
  if (!req.body.name || !req.body.description || !req.body.ingredients || !req.body.price || !req.body.note || !req.body.difficulty || !req.body.duration || !req.body.pictures || !req.body.isPublic || !req.body.totalPrice) return throwBadRequest('Missing Parameters', res);
  await RecipeModel.createRecipe(req.body.name, req.body.description, req.body.ingredients, req.body.price,  req.body.note, req.body.difficulty, req.body.duration, req.body.pictures, req.body.isPublic, req.body.totalPrice, (err, record) => {
    if (err) return throwIntServerError(err, res);
    return sendCreated(record, res);
  });
}

export const getAllRecipes = async (req, res) => {
  await RecipeModel.getAllRecipes((err, recipes) => {
    if (err) return throwNotFound(err, res);
    return sendOKWithData(recipes, res);
  });
}

export const getOneRecipe = async (req, res) => {
  if (!req.params.name) return throwBadRequest('Missing Parameters', res);
  await RecipeModel.getRecipe(req.params.name, (err, result) => {
    if (err) return throwIntServerError(err, res);
    return sendOKWithData({
      _id: result._id,
      name: result.name,
      description: result.description,
      ingredients: result.ingredients,
      note: result.note,
      difficulty: result.difficulty,
      duration: result.duration,
      pictures: result.pictures,
      isPublic: result.isPublic,
      totalPrice : result.totalPrice
    }, res);
  });
}

export const editOneRecipe = async (req, res) => {
  if (!req.params.id || !req.body.name || !req.body.description || !req.body.ingredients ||!req.body.note || !req.body.difficulty || !req.body.duration || !req.body.pictures || !req.body.isPublic || !req.body.totalPrice) return throwBadRequest('Missing Parameters', res);
  await RecipeModel.updateRecipe(req.params.id, req.body.name, req.body.description, req.body.ingredients, req.body.note, req.body.difficulty, req.body.duration, req.body.pictures, req.body.isPublic, req.body.totalPrice, (err, result) => {
    if (err) return throwIntServerError(err, res);
    return sendOKWithData({
      _id: result._id,
      name: result.name,
      description: result.description,
      ingredients: result.ingredients,
      note: result.note,
      difficulty: result.difficulty,
      duration: result.duration,
      pictures: result.pictures,
      isPublic: result.isPublic,
      totalPrice : result.totalPrice
    }, res)
  })
}

export const deleteRecipe = async function (req, res) {
  if (!req.params.id) return throwBadRequest('Missing Parameters', res);
  await RecipeModel.deleteRecipe(req.params.id, (err) => {
    if (err) return throwIntServerError(err, res);
    return sendOK(res);
  })
}
