const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

// Definicje punktów końcowych operacji użytkownika
router.get('/profile', authenticate, userController.getUserProfile);
router.put('/update', authenticate, userController.updateUser);

module.exports = router;