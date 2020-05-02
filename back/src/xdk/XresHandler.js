/**
 ** Developed by Xcrowzz
 ** On 01/08/2019
 ** For project poc_newsletters
 ** Copyright (c) 2018-2019. All rights reserved.
 */

import { OK, CREATED } from './messages/validMessages';
import { FORBIDDEN, UNAUTHORIZED } from './messages/aclMessages';
import { TEAPOT } from './messages/miscMessages';
import {
  INTERNAL_SERVER_ERROR, BAD_GATEWAY, BAD_REQUEST, NOT_FOUND, NOT_IMPLEMENTED
} from './messages/errorMessages';

import Xlog from './Xlog';

const X = new Xlog('xdk:XresHandler');

// 200
export const sendOK = (res) => {
  X.info(res);
  return res.status(200).send(OK);
};

export const sendOKWithData = (obj, res) => {
  X.info(JSON.stringify(obj));
  return res.status(200).send(obj);
};

export const sendCreated = (obj, res) => {
  X.info(obj);
  return res.status(201).send(CREATED);
};

// 400
export const throwBadRequest = (err, res) => {
  X.error(err);
  return res.status(400).send(BAD_REQUEST);
};

export const throwUnauthorized = (err, res) => {
  X.error(err);
  return res.status(401).send(UNAUTHORIZED);
};

export const throwForbidden = (err, res) => {
  X.error(err);
  return res.status(403).send(FORBIDDEN);
};

export const throwNotFound = (err, res) => {
  X.error(err);
  return res.status(404).send(NOT_FOUND);
};

export const throwTeaPot = (res) => {
  X.error(TEAPOT, 'INF');
  return res.status(418).send(TEAPOT);
};

// 500
export const throwIntServerError = (err, res) => {
  console.log('erreur ++++ ' + err);
  X.error(err);
  return res.status(500).send(INTERNAL_SERVER_ERROR);
};

export const throwNotImplemented = (err, res) => {
  X.error(NOT_IMPLEMENTED);
  return res.status(501).send(NOT_IMPLEMENTED);
};

export const throwBadGateway = (err, res) => {
  X.error(err);
  return res.status(502).send(BAD_GATEWAY);
};

/* module.exports = {
  sendOK,
  sendOKWithData,
  sendCreated,
  throwBadRequest,
  throwUnauthorized,
  throwForbidden,
  throwNotFound,
  throwTeaPot,
  throwIntServerError,
  throwNotImplemented,
  throwBadGateway,
}; */
