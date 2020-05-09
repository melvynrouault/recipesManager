// import Xlog from '../tools/Xlog';
// import {throwBadRequest,  sendOK, sendOKWithData, sendCreated, throwIntServerError } from '../tools/XresHandler';
import {throwBadRequest,  sendOK, sendOKWithData, sendCreated, throwIntServerError } from '../xdk/XresHandler';
import utils from '../tools/utils';
import UserModel from '../models/userModel';

export const registerUser = async (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.pswd || !req.body.pswdConfirm) return throwBadRequest('Missing Parameters', res);
    if (!await utils.validateEmail(req.body.email)) return throwBadRequest('Wrong email format', res);
    if (!await utils.validatePassword(req.body.pswd)) return throwBadRequest('Wrong Password format must be: at least 3 char long with 1 uppercase 1 lowercase and 1 number', res);
    if (req.body.pswd != req.body.pswdConfirm) return throwBadRequest('Wrong password confirmation', res);
    await UserModel.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.pswd, (err, record) => {
        if (err) return throwIntServerError(err, res);
        return sendCreated(record, res);
    });
};

export const logUser = async (req, res) => {
    if (!req.body.email || !req.body.pswd) return throwBadRequest('Missing parameters', res);
    if (!await utils.validateEmail(req.body.email)) return throwBadRequest('Wrong email format', res);
    if (!await utils.validatePassword(req.body.pswd)) return throwBadRequest('Wrong password formatmust be: at least 3 char long with 1 uppercase 1 lowercase and 1 number', res);
    await UserModel.fetchUser(req.body.email, req.body.pswd, (err, result) => {
        if (err) return throwIntServerError(err, res);
        return sendOKWithData({ auth: true, token: result }, res);
    });
}

export const deleteUser = async function (req, res) {
    if (!req.body._id) return throwBadRequest('Missing parameters', res);
    await UserModel.deleteUser(req.body._id, (err, result) => {
        if (err) return throwIntServerError(err, res);
        return sendOK(res);
    })
}

export const getInfosUser = async (req, res) => {
    if (!req.params.id) return throwBadRequest('Missing parameters', res);
    await UserModel.getUser(req.params.id, (err, result) => {
        if (err) return throwIntServerError(err, res);
        return sendOKWithData({
            _id: result._id,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.userEmail,
        }, res)
    })
}


export const editInfosUser = async (req, res) => {
    if (!req.params.id || !req.body.firstName || !req.body.lastName || !req.body.email) return throwBadRequest('Missing parameters', res);
    await UserModel.updateUser(req.params.id, req.body.firstName, req.body.lastName, req.body.email, (err, result) => {
        if (err) return throwIntServerError(err, res);
        return sendOKWithData({
            _id: result._id,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.userEmail,
        }, res);
    });
    return null;
}

