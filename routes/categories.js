const express = require("express");
const Controller = require("../controllers/categories.controller.js")

const app = express.Router();

app.get('/categories', Controller.getCategories );


module.exports = app;