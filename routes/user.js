const express = require("express");
const Controller = require("../controllers/user.controller.js")

const app = express.Router();

app.get('/user/:id', Controller.getUser );

module.exports = app;