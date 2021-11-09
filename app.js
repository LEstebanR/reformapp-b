require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const categories = require('./routes/categories');
const user = require('./routes/user');
const reform = require('./routes/reform.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(categories);
app.use(user)
app.use(reform)

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established succesfully');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err.message });
});

module.exports = app;