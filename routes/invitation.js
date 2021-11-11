const express = require("express");
const Controller = require("../controllers/invitation.controller.js")

const app = express.Router();

app.post('/invitation', Controller.createInvitation );
app.get('/invitationsaccepted/:id', Controller.InvitationsAccepted );


module.exports = app;