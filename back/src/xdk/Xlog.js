/**
 ** Developed by Xcrowzz
 ** On 26/11/2019
 ** For project StaffTrack
 ** Copyright (c) 2019. All rights reserved.
 */

import fs from 'fs';

export default class Xlog {
  constructor(name) {
    console.log('Instantiating Xlogger');
    this._name = name;
    if (!fs.existsSync('./logs/')) {
      fs.mkdir('./logs', (err) => {
        if (err) throw new Error(`Could not create logs/ directory: ${err}`);
      });
    }
  }

  static write(type, message) {
    switch (type) {
      default:
      case 'LOG':
      case 'DEBUG':
      case 'INFO':
      case 'BOOT':
        fs.createWriteStream('./logs/out.log', { flags: 'a' }).write(`[${type}] ${new Date().toISOString()}-${message}\n`);
        break;
      case 'WAR':
      case 'ERR':
        fs.createWriteStream('./logs/error.log', { flags: 'a' }).write(`[${type}] ${new Date().toISOString()}-${message}\n`);
    }
    console.log(`[${type}] ${new Date().toISOString()}-${message}`);
  }

  log(message) {
    Xlog.write('LOG', `[${this._name}] | ${message}`);
  }

  debug(message) {
    Xlog.write('DEBUG', `[${this._name}] | ${message}`);
  }

  info(message) {
    Xlog.write('INFO', `[${this._name}] | ${message}`);
  }

  boot(message) {
    Xlog.write('BOOT', `[${this._name}] | ${message}`);
  }

  warning(message) {
    Xlog.write('WAR', `[${this._name}] | ${message}`);
  }

  error(message) {
    Xlog.write('ERR', `[${this._name}] | ${message}`);
  }
}
