const jwt = require("jsonwebtoken");
const config = require("../config/config");

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "No authorization token" });
  }
  try {
    const decoded = jwt.verify(token, config.secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token authorization error' });
  }
};

module.exports = authenticate;