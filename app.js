const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
    next();
});

mongoose.connect('mongodb+srv://Juma_Kiwaka:myTA0Myu85O5h9SK@cluster0-5mh4u.mongodb.net/test?retryWrites=true&w=majority').then(() => {
    console.log('Database connected successfully!');
}).catch((err) => {
    console.log('Failed to connect due to:');
    console.error(err);
});

app.use('/api/recipes', recipeRoutes);

module.exports = app;