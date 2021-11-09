const mongoose = require('mongoose');

const reformSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    photo: {
      type: String,
    },
    location: {
      type: String,
    },
    owner:{
      type: String,
    },
    options:{
      type: Array,
    
    },
    state:{
      type: Object,
      default: {
        open: true,
        contract: false,
        pay: false,
        done: false,
      },
    },
    category:{
      type: String,
    },
})

const Reform = mongoose.model('Reform', reformSchema);

module.exports = Reform;
