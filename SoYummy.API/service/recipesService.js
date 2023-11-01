const Recipe = require('../models/recipe')
const { ObjectId } = require('mongoose')

/**
 * Zwraca tablicę obiektów Recipe na podstawie tablicy z ObjectId
 * @param {[ObjectId]} favorites - tablica id ulubionych przepisów
 */
const getUsersRecipes = favorites => Recipe.find({ _id: { $in: favorites } })

/**
 * Dodaje własny przepis do kolekcji
 * @param {Recipe} recipe - nowy przepis
 */
const addOwnRecipe = async recipe => recipe.save()

/**
 * Usuwa własny przepis z kolekcji
 * @param {ObjectId} recipeId - id przepisu
 */
const removeOwnRecipe = async recipeId => Recipe.findByIdAndRemove(recipeId)

/**
 * Zwraca tablicę własnych przepisów użytkownika
 * @param {ObjectId} userId - id użytkownika
 */
const getOwnRecipes = async userId => Recipe.find({ owner: userId })

module.exports = { getUsersRecipes, addOwnRecipe, removeOwnRecipe, getOwnRecipes }
