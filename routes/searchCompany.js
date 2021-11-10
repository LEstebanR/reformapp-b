const express = require("express");
const Controller = require("../controllers/searchCompany.controller.js")

const app = express.Router();

app.get('/searchcompany/:query', Controller.searchCompany);

module.exports = app;