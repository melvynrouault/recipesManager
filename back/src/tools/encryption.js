/**
 ** Developed by Xcrowzz
 ** On 10/10/2019
 ** For project poc_newsletters
 ** Copyright (c) 2018-2019. All rights reserved.
 */

/* SYMMETRIC CRYPTOGRAPHY */
import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = (process.env.BUILD_ENVIRONMENT === 'PRODUCTION') ? crypto.randomBytes(32) : 'DoNotUseThisSecretInProduction32';
const iv = (process.env.BUILD_ENVIRONMENT === 'PRODUCTION') ? crypto.randomBytes(16) : Buffer.from('DoNotUseThisSecr');

export const encryptSym = async (data) => {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
};

export const decryptSym = async (data) => {
  let iv = Buffer.from(data.iv, 'hex');
  let encryptedData = Buffer.from(data.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedData);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
