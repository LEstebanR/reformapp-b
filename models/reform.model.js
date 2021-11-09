const mongoose = require('mongoose');

const reformSchema = mongoose.Schema(
  {
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
      }
    },
})

const Reform = mongoose.model('Reform', reformSchema);

module.exports = Reform;
