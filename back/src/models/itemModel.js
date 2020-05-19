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
});

// CRUD ITEM

ItemSchema.statics.createItem = async function(name, price, cb) {
    if (!name || !price) return ;
    let item = await this.findOne({ name })
    if (item) return cb(new Error('Item already exists'));
    await this.model('Item').create({
        name,
        price,
    }, (err, record) => {
        if (err) return cb(err);
        return cb(null, record);
    });
    return null;
};

ItemSchema.statics.getItem = async function (name, cb) {
    await this.findOne({ name }, async (err, item) => { 
        if (err) return cb(err);
        if (!item) return cb(new Error('Item not found'));
        return cb(null, item);
    });
}

ItemSchema.statics.updateItem = async function (_id, name,  price, cb) {
    await this.findOneAndUpdate({ name }, { name, price }, { new: true }, async (err, user) => {
        if (err) return cb(err);
        if (!item) return cb(new Error('Item not found'));
        return cb(null, item);
    });
}

ItemSchema.statics.deleteItem = async function(name, cb) {
    await this.model('Item').deleteOne({ name }, (err, item) => {
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