const mongoose = require("mongoose");

const invitationsSchema = mongoose.Schema({
  ownerId: {
    type: String,
  },
  ownerName: {
    type: String,
  },
  companyId: {
    type: String,
  },
  companyName: {
    type: String,
  },
  reformTitle:{
    type: String,
  },
  reformDescription:{ 
    type: String,
  },
  reformPhoto:{
    type: String,
  },
  reformId:{
    type: String,
  },
  status: {
    type: String,
    
  }
});

const Invitations = mongoose.model("Invitations", invitationsSchema);
module.exports = Invitations;