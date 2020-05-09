const mongoose = require('mongoose');
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const RecipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
        maxLength: 254,
        unique: false,
    },
    recipeNote: {
        type: Float32Array,
        maxlength: 1,
        unique: false,
    },
    recipeDificulty: {
        type: Float32Array,
        maxlength: 1,
        unique: false,
    },
    recipeTime: {
      type: Number,
      maxlength: 3,
      unique: false,
    },
});

// CRUD USER

UserSchema.statics.createUser = async function(firstName, lastName, userEmail, userPswd, cb) {
    if (!userEmail || !userPswd) return ;
    const hashedSecret = await bcrypt.hash(userPswd, 10);
    let user = await this.findOne({ userEmail })
    if (user) return cb(new Error('User already exists'));
    await this.model('User').create({
        firstName,
        lastName,
        userEmail,
        userPswd: hashedSecret,
    }, (err, record) => {
        if (err) return cb(err);
        return cb(null, record);
    });
    return null;
};

UserSchema.statics.getUser = async function (_id, cb) {
    await this.findOne({ _id }, async (err, user) => {
        if (err) return cb(err);
        if (!user) return cb(new Error('User not found'));
        return cb(null, user);
    });
}


UserSchema.statics.updateUser = async function (_id, firstName,  lastName, userEmail, cb) {
    await this.findOneAndUpdate({ _id }, { firstName, lastName, userEmail }, { new: true }, async (err, user) => {
        if (err) return cb(err);
        if (!user) return cb(new Error('User not found'));
        return cb(null, user);
    });
}

UserSchema.statics.deleteUser = async function(_id, cb) {
    await this.model('User').deleteOne({ _id }, (err, user) => {
        if (err) return cb(err);
        return cb(null, user);
    });
}

// LOG USER
UserSchema.statics.fetchUser = async function (userEmail, userPswd, cb) {
    await this.findOne({ userEmail }, async (err, user) => {
        if (err) return cb(err);
        if(!user) return cb(new Error('user Not Found'));
        const isValid = await bcrypt.compare(userPswd, user.userPswd);
        const userId = user._id;
        if(isValid === true) {
            let token = jwt.sign({ id: userId, userEmail: userEmail, userPswd: userPswd }, secret, {expiresIn: 86400});
            return cb(null, token);
        } else {
            return cb(new Error('Invalid Credentials'));
        }
    }).select('+userPswd');
}


const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
