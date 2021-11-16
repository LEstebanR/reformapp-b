const Reform = require('../models/reform.model')
const mongoosse = require('mongoose')


const getReform = async (req, res) => {
  try {
    const {id} = req.params
    const reform = await Reform.find({ownerId: id})
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

const getReformbyId = async (req, res) => {
  try {
    const {id} = req.params
    const reform = await Reform.find({_id: id})
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

const getReformbyType = async (req, res) => {
  try {
    const {type} = req.params
    const reform = await Reform.find({category: type})
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
    const { title, description, photo, location, category, ownerId, ownerName, adress, city, country, mark } = req.body
    const reform =  await Reform.create({
      title,
      description,
      photo,
      location,
      category,
      ownerId,
      ownerName,
      adress,
      city,
      country,
      mark,
      options: [],
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
    next()
  } catch (error) {
    console.error (error)
    res.status(400).json({
      message: 'Error creating reform',
      error
    })
  }

}

const updateReform = async(req, res, next) => {
  try {
    const { id, name, avatar, propuse } = req.body
    const propuesta= {name : name, avatar : avatar, propuse: propuse}
    await Reform.updateOne({ _id: id }, { $push: { options: propuesta } })
    res.status(200).json({
      message: 'Reform updated',
      propuesta
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {getReform, getReformbyId, createReform, getReformbyType, updateReform}