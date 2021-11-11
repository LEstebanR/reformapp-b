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
    const pages = parseInt(data.length/9)
    let count
    pages > 1 ? count = pages : count = 1

    res.status(200).json({data, count})
    
    
  } catch (error) {
    res.status(500).send(error)
  }
  
}

module.exports = {searchCompany};