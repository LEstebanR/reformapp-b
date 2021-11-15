const mongoose = require('mongoose');

const reformSchema = mongoose.Schema(
  {
    title: {
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
    category:{
      type: String,
    },
    ownerId:{
      type: String,
    },
    ownerName:{
      type: String,
    },
    options:{
      type: Array,
    },
    adress:{
      type: String,
    },
    city:{
      type: String,
    },
    country:{
      type: String,
    },
    mark:{
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
    }

})

const Reform = mongoose.model('Reform', reformSchema);

module.exports = Reform;
