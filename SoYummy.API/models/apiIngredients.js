const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apiIngredient = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  ttl: {
    type: String,
  },
  thb: {
    type: String,
  },
  t: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const apiIngredients = mongoose.model("apiingredients", apiIngredient);

module.exports = apiIngredients;
