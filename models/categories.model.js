const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  subject: {
    type: String,
    required: false,
  },
});

const Categories = mongoose.model("Categories", categoriesSchema);
module.exports = Categories;