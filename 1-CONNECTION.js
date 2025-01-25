// MONGODB CONNECTION WITH MONGOOSE

const express = require("express");
var mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017');
console.log("Connection created...")

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

mongoose.connection.close();
