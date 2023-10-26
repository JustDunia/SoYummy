const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Upewnij się, że ścieżka jest poprawna

// Punkt końcowy rejestracji użytkownika
router.post('/register', authController.registerUser);

// Punkt końcowy logowania użytkownika
router.post('/login', authController.login);

// Punkt końcowy wylogowania użytkownika
router.post('/logout', authController.logout);

// Punkt końcowy resetu hasła
router.post('/reset-password', authController.resetPassword);

// Punkt końcowy zmiany hasła
router.post('/change-password', authController.changePassword);

module.exports = router;
