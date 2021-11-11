const express = require("express");
const Controller = require("../controllers/invitation.controller.js")

const app = express.Router();

app.post('/invitation', Controller.createInvitation );


module.exports = app;