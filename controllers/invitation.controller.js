const mongoose = require('mongoose')
const Invitations = require("../models/invitations.model.js");

const createInvitation = async(req, res, next) => {
  try {
    console.log(req.body)
    const {ownerId, ownerName, companyId, companyName, reformTitle, reformDescription} = req.body;
    const invitation = await Invitations.create({
      ownerId,
      ownerName,
      companyId,
      companyName,
      reformTitle,
      reformDescription,
      status: 'pending',
    })
    next()
    res.status(200).json({
      message: 'Invitation created successfully',
      invitation
    })
  } catch (error) {
    console.error(error)
    res.status(400).json({
      message: 'Error creating invitation',
      error
    })
  }
  
};

module.exports =  {createInvitation};