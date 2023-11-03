const express = require("express");
const router = express.Router();
require("dotenv").config();
const apiIngredientsControllers = require("../controllers/apiIngredients");

router.get("/all-ingredients", apiIngredientsControllers.getAllIngredients);
router.get("/all-ttl", apiIngredientsControllers.getAllTitles);

module.exports = router;
