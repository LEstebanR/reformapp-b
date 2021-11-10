const express = require("express");
const Controller = require("../controllers/reform.controller.js")

const app = express.Router();

app.get('/reform/:id', Controller.getReform );
app.get('/reformbyid/:id', Controller.getReformbyId );
app.post('/reform', Controller.createReform );


module.exports = app;