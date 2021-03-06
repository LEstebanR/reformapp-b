const mongoose = require('mongoose');
const User = require('../models/users.model');


const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ authId: req.params.id })
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id })
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = { getUser, getUserById, createUser };