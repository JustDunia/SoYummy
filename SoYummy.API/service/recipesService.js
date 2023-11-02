const Recipe = require('../models/recipe')
const { ObjectId } = require('mongoose')

/**
 * Zwraca tablicę obiektów Recipe na podstawie tablicy z ObjectId
 * @param {[ObjectId]} favorites - tablica id ulubionych przepisów
 */
const getUsersRecipes = favorites => Recipe.find({ _id: { $in: favorites } })

module.exports = { getUsersRecipes }
