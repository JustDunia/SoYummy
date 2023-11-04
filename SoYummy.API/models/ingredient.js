const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  ttl: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  t: String,
  thb: String,
});

module.exports = mongoose.model('Ingredient', ingredientSchema, 'Ingredients');
