const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types

const shoppingListSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "User", 
    required: true,
  },
  ingredients: [
    {
      type: ObjectId,
      ref: "Ingredient", 
      required: true,
    },
  ],
});

const ShoppingList = model('ShoppingList', shoppingListSchema)

module.exports = ShoppingList;
