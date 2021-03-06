/**
 ** Developed by Xcrowzz
 ** On 01/08/2019
 ** For project poc_newsletters
 ** Copyright (c) 2018-2019. All rights reserved.
 */
import Xlog from '../xdk/Xlog';
const X = new Xlog('tools:logger');

export default function myLogger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const userId = (req.userId) ? req.userId : '';
  const body = (req.body) ? req.body : '';
  const ip = (req.headers['x-forwarded-for']) ? req.headers['x-forwarded-for'] : ''; // Requested into nginx conf.d /!\

  X.info('+++++++++++++++++++++++++++++++++++++++++++++++', 'INF');
  X.info(`${method} ${url}`, 'INF');
  if (userId) X.info(`userId: ${userId}`, 'INF');
  if (ip) X.info(`IP: ${ip}`, 'INF');
  if (body) X.info(`Body: ${JSON.stringify(body)}`, 'INF');
  next();
};