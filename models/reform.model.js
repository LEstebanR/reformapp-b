const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    owner:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    options:{
      type: Array,
    
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;
