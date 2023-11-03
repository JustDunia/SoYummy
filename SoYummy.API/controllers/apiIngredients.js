const ApiIngredients = require("../models/apiIngredients");

const getAllIngredients = async (req, res, next) => {
  try {
    const documents = await ApiIngredients.find({});
    if (!documents || documents.length === 0) {
      return res.status(404).json({ message: "No documents found" });
    }
    res.send({ status: "ok", ingredients: documents });
  } catch (error) {
    next(error);
  }
};

const getAllTitles = async (req, res, next) => {
  try {
    const documents = await ApiIngredients.find({}, "ttl");
    if (!documents || documents.length === 0) {
      return res.status(404).json({ message: "No documents found" });
    }
    const titles = [...new Set(documents.map((doc) => doc.ttl))];
    res.send({ status: "ok", titles });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllIngredients,
  getAllTitles,
};
