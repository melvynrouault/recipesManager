const mongoose = require('mongoose');
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 10,
        unique: false,
    },
    imgName : {
        type: String,
        required: true,
    }
});

// CRUD ITEM

ItemSchema.statics.createItem = async function(name, price, imgName, cb) {
    if (!name || !price || !imgName) return ;
    let item = await this.findOne({ name })
    if (item) return cb(new Error('Item already exists'));
    await this.model('Item').create({
        name,
        price,
        imgName
    }, (err, record) => {
        if (err) return cb(err);
        return cb(null, record);
    });
    return null;
};

ItemSchema.statics.getItem = async function (id, cb) {
    await this.findOne({ "_id" : (id) }, async (err, item) => { 
        if (err) return cb(err);
        if (!item) return cb(new Error('Item not found'));
        return cb(null, item);
    });
}

ItemSchema.statics.updateItem = async function (_id, name, price, imgName, cb) {
    await this.findOneAndUpdate({ id }, { name, price, imgName }, { new: true }, async (err, item) => {
        if (err) return cb(err);
        if (!item) return cb(new Error('Item not found'));
        return cb(null, item);
    });
}

ItemSchema.statics.deleteItem = async function(id, cb) {
    await this.model('Item').deleteOne({ id }, (err, item) => {
        if (err) return cb(err);
        return cb(null, item);
    });
}

ItemSchema.statics.getAllItems = async function (cb) {
    await this.model('Item').find({}, async (err, items) => {
        if (err) return cb(err);
        if (!items) return cb(new Error('Items not found'));
        return cb(null, items);
    });
}

const ItemModel = mongoose.model('Item', ItemSchema);
export default ItemModel;