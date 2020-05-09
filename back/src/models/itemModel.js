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
        type: Float32Array,
        required: true,
        maxlength: 10,
        unique: flase,
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

ItemSchema.statics.getItem = async function (_id, cb) {
    await this.findOne({ _id }, async (err, item) => {
        if (err) return cb(err);
        if (!item) return cb(new Error('Item not found'));
        return cb(null, item);
    });
}


ItemSchema.statics.updateItem = async function (_id, name,  price, cb) {
    await this.findOneAndUpdate({ _id }, { name, price }, { new: true }, async (err, user) => {
        if (err) return cb(err);
        if (!item) return cb(new Error('Item not found'));
        return cb(null, item);
    });
}

ItemSchema.statics.deleteItem = async function(_id, cb) {
    await this.model('Item').deleteOne({ _id }, (err, item) => {
        if (err) return cb(err);
        return cb(null, item);
    });
}

const ItemModel = mongoose.model('Item', ItemSchema);
export default ItemModel;