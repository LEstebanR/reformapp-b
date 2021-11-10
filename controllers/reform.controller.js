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
    const { title, description, photo, location, category, owner } = req.body
    const reform =  await Reform.create({
      title,
      description,
      photo,
      location,
      category,
      owner,
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

module.exports = {getReform, createReform}