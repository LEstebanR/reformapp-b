const mongoose = require('mongoose');
const User = require('../models/users.model');

const searchCompany = async (req, res) => { 
  try {
    const {query, page} = req.params;
    const regex = new RegExp(query, 'i');
    const data = await User.find({ $and : [{role: "company"},
      {$or: [{name:{$in: regex}}, {specialty: {$in: regex}}]}]})
      .skip((page-1)*9)
      .limit(9)
    res.status(200).json({data})
    
  } catch (error) {
    console.error(error);
  }
  
}

module.exports = {searchCompany};