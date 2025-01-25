// MONGODB CREATING COLLECTION WITH MONGOOSE

const express = require("express");
var mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/mydb');
console.log("Connection created...")

const db = mongoose.connection;
db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('Connected to MongoDB....');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

// Calling Schema class 
const Schema = mongoose.Schema; 
  
// Creating Structure of the collection 
const collection_structure = new Schema({ 
  name: { type: String, require: true} , 
  marks: { type: Number, default: 0 } 
})  
// Creating collection (table), model creates table
const collections = mongoose.model("table1", collection_structure) 
  
// Inserting one document 
collections.create({ 
  name: "Nikhil", 
  marks: 90 
}).then((ans) => { 
  console.log("Document inserted...") 
}).catch((err) => { 
  //console.log(err.Message); 
  console.log("Unable to insert document"); 
})
mongoose.connection.close();
