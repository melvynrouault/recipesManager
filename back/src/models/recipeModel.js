const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 254,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        maxlength: 254,
        unique: false,
        required: true,
    },
    ingredients: {
        type: [String, Number],
    },
    note: {
        type: Number,
        required: true,
        default: 0,
    },
    difficulty: {
        type: Number,
        unique: false,
        required: true,
    },
    duration: {
      type: Number,
      unique: false,
      required: true,
    },
    pictures: {
        type: [String],
    },
    isPublic: {
        type: Boolean,
        default: false,
    }
});

// CRUD USER

RecipeSchema.statics.createRecipe = async function(name, description, ingredients, note, difficulty, duration, pictures, isPublic, cb) {
    if (!name || !description || !ingredients || !note || !difficulty || !duration || !pictures || !isPublic) return ;
    let recipe = await this.findOne({ name })
    if (recipe) return cb(new Error('Recipe already exists'));
    await this.model('Recipe').create({
        name,
        description,
        ingredients,
        note,
        difficulty,
        duration,
        pictures,
        isPublic
    }, (err, record) => {
        if (err) return cb(err);
        return cb(null, record);
    });
    return null;
};

RecipeSchema.statics.getAllRecipes = async function (cb) {
    await this.model('Recipe').find({}, async (err, recipes) => {
        if (err) return cb(err);
        if (!recipes) return cb(new Error('Recipes not found'));
        return cb(null, recipes);
      });
}

RecipeSchema.statics.getRecipe = async function (_id, cb) {
    await this.findOne({ _id }, async (err, recipe) => {
        if (err) return cb(err);
        if (!recipe) return cb(new Error('Recipe not found'));
        return cb(null, recipe);
    });
}


RecipeSchema.statics.updateRecipe = async function (_id, name, description, ingredients, note, difficulty, duration, pictures, isPublic, cb) {
    await this.findOneAndUpdate({ _id }, { name, description, ingredients, note, difficulty, duration, pictures, isPublic, }, { new: true }, async (err, recipe) => {
        if (err) return cb(err);
        if (!recipe) return cb(new Error('Recipe not found'));
        return cb(null, recipe);
    });
}

RecipeSchema.statics.deleteRecipe = async function(_id, cb) {
    await this.model('Recipe').deleteOne({ _id }, (err, recipe) => {
        if (err) return cb(err);
        return cb(null, recipe);
    });
}

const RecipeModel = mongoose.model('Recipe', RecipeSchema);
export default RecipeModel;
