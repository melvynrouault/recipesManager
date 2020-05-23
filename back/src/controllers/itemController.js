import {throwBadRequest,  sendOK, sendOKWithData, sendCreated, throwIntServerError } from '../xdk/XresHandler';
import utils from '../tools/utils';
import ItemModel from '../models/itemModel';

export const addItem = async (req, res) => {
    if (!req.body.name || !req.body.price) return throwBadRequest('Missing Parameters', res);
    await ItemModel.createItem(req.body.name, req.body.price, (err, record) => {
        if (err) return throwIntServerError(err, res);
        return sendCreated(record, res);
    });
};
  
export const getOneItem = async (req, res) => {
    if (!req.params.id) return throwBadRequest('Missing parameters', res);
    await ItemModel.getItem(req.params.id, (err, result) => {
        if (err) return throwIntServerError(err, res);
        return sendOKWithData({
            _id: result._id,
            name: result.name,
            price: result.price,
        }, res)
    })
  }

export const editInfosItem = async (req, res) => {
    if (!req.params.id || !req.body.name || !req.body.price) return throwBadRequest('Missing parameters', res);
    await ItemModel.updateItem(req.params.id, req.body.name, req.body.price, (err, result) => {
        if (err) return throwIntServerError(err, res);
        return sendOKWithData({
            _id: result._id,
            name: result.name,
            price: result.price,
        }, res);
    });
    return null;
}

export const deleteItem = async function (req, res) {
    if (!req.body.id) return throwBadRequest('Missing parameters', res);
    await ItemModel.deleteItem(req.body.id, (err, result) => {
        if (err) return throwIntServerError(err, res);
        return sendOK(res);
    })
}

export const getAllItems = async (req, res) => {
    await ItemModel.getAllItems((err, items) => {
      if (err) return throwNotFound(err, res);
      return sendOKWithData(items, res);
    });
  }