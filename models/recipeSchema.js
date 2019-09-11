const mongoose = require('mongoose');

const recipe = mongoose.Schema({
    title: {type: String, required: true},
    ingredients: {type: String, required: true},
    instructions: {type: String, required: true},
    time: {type: String, required: true},
    difficulty: {type: String, required: true},
    userId: {type: String, required: false},
})

module.exports = mongoose.model('Recipe', recipe);