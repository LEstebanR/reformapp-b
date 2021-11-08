const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    authId:{
      type: String,
      required: true,
      unique: true
    },
    
    role: {
      type: String,
      enum: ['owner', 'company'],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: 'https://res.cloudinary.com/dzqbzqgqw/image/upload/v1598424851/default-avatar_jxqzqz.png',
    },
    description: {
      type: String,
      default: '',
    },
    specialty: {
      type: String,
      default: 'Otros',
    },


})

const User = mongoose.model('User', userSchema);

module.exports = User;
