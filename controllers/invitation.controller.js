const mongoose = require('mongoose')
const Invitations = require("../models/invitations.model.js");

const createInvitation = async(req, res, next) => {
  try {
    console.log(req.body)
    const {
      companyId, 
      companyName, 
      ownerId, 
      ownerName, 
      reformDescription,
      reformId,
      reformPhoto,
      reformTitle, 
    } = req.body;
    const invitation = await Invitations.create({
      companyId,
      companyName,
      ownerId,
      ownerName,
      reformDescription,
      reformId,
      reformPhoto,
      reformTitle,
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