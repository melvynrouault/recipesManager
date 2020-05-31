import {
    throwBadRequest, throwIntServerError, throwForbidden, sendOK,
  } from '../xdk/Xres';
  
  const fse = require('fs-extra');
  const formidable = require('formidable');
  const Path = require('path');
  
  const download = async (req, res) => {
    const form = new formidable.IncomingForm();
    await form.parse(req, (err, fields, files) => {
      // Check if error or file error
      if (err) return throwIntServerError(err, res);
      // Check if a file is uploaded
      if (files.file.type === null && files.file.name === '') {
        return throwBadRequest(new Error('Please upload a file'), res);
      }
      // Check size of file
      if (files.file.size > 16000000) return throwForbidden(new Error('File too large'), res);
      // Check if pdf file and username matches regex (only alphanumeric chars)
      const regex = '^[a-zA-Z0-9]*$';
      if (!fields.username || !fields.username.match(regex) || files.file.type !== 'application/pdf') {
        return throwBadRequest(new Error('Error while uploading file'), res);
      }
  
      // Change filename (replace empty spaces to "")
      const newName = files.file.name.split(' ')
        .join('');
  
      // Change filename
      const oldpath = files.file.path;
      const newFileName = `${Date.now()}_${fields.username}_${newName}`;
  
      // Change file path and create user's folder if necessary
      const newpath = Path.join(__dirname, '..\\..\\front\\recipesmanager\\assets\\img\\img_aliment\\', fields.username, newFileName);
  
      // eslint-disable-next-line no-shadow
      fse.copy(oldpath, newpath, (err) => {
        if (err) return throwIntServerError(err, res);
        return sendOK(res);
      });
      return null;
    });
  };
  
  module.exports = {
    download,
  };  