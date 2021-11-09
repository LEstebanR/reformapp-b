const Reform = require('../models/reform.model')
const mongoosse = require('mongoose')


const getReform = async (req, res) => {
  try {
    const {id} = req.params
    const reform = await Reform.find({owner: id})
    res.status(200).json({
      message: 'Reform found',
      reform
    })
  } catch (error) {
    res.status(400).json({
      message: 'Error getting reform',
      error
    })
  }
}

const createReform = async(req, res, next) => {
  try {
    const { description, photo, location, owner, category } = req.body
    const reform =  await Reform.create({
      description,
      photo,
      location,
      owner : owner.authId,
      options: [],
      category,
      state: {
        open: true,
        contract: false,
        pay: false,
        done: false,
      }
    })
    res.status(200).json({
      message: 'Reform created',
      reform
    })
    console.log (owner)
    next()
  } catch (error) {
    console.error (error)
    res.status(400).json({
      message: 'Error creating reform',
      error
    })
  }

}

module.exports = {getReform, createReform}