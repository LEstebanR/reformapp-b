const mongoose = require('mongoose')
const Invitations = require("../models/invitations.model.js");

const createInvitation = async(req, res, next) => {
  try {
    console.log(req.body)
    const {
      ownerId, 
      ownerName, 
      companyId, 
      companyName, 
      reformTitle, 
      reformDescription,
      reformPhoto,
      reformId,
    } = req.body;
    const invitation = await Invitations.create({
      ownerId,
      ownerName,
      companyId,
      companyName,
      reformTitle,
      reformDescription,
      reformPhoto,
      reformId,
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

const InvitationsAccepted = async(req, res) => {
  try {
    const id = req.params.id;
    const data = await Invitations.find({$and: [{companyId: id}, {status: 'accepted'}]})
    res.status(200).json({data})
  } catch (error) {
    res.status(500).send(error)
  }
  
}

module.exports =  {createInvitation, InvitationsAccepted};