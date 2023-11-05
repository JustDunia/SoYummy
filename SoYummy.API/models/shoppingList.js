const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId, String } = Schema.Types;

const shoppingListSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  ingredients: [
    {
      ingredient: {
        type: ObjectId,
        ref: 'Ingredient',
        required: true,
      },
      measure: {
        type: String,
        required: true,
      },
    },
  ],
});
console.log('ShoppingList model initialized.');
const ShoppingList = model('ShoppingList', shoppingListSchema);

module.exports = ShoppingList;
