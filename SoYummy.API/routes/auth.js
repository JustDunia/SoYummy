const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController') // Upewnij się, że ścieżka jest poprawna

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         username:
 *           type: string
 *           description: User's name
 *         password:
 *           type: string
 *           description: User's password
 *         email:
 *           type: string
 *           description: User's email
 *         token:
 *           type: string
 *           description: User's token
 *     RegisterUser:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: User's name
 *         password:
 *           type: string
 *           description: User's password
 *         email:
 *           type: string
 *           description: User's email
 *     LoginUser:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: User's email
 *         password:
 *           type: string
 *           description: User's password
 */

/**
 * @swagger
 * /auth/register:
 *    post:
 *      description: User registration
 *      requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/RegisterUser'
 *      responses:
 *        201:
 *          description: Rejestracja pomyślna.
 *        400:
 *          description: Użytkownik o takim adresie email już istnieje.
 */
router.post('/register', authController.registerUser)

/**
 * @swagger
 * /auth/login:
 *    post:
 *      description: User sign in
 *      requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/LoginUser'
 *      responses:
 *        200:
 *          description: Logowanie zakończone sukcesem
 *        401:
 *          description: Niepoprawne hasło
 *        404:
 *          description: Użytkownik nie istnieje
 */
router.post('/login', authController.loginUser)

// Punkt końcowy wylogowania użytkownika
router.post('/logout', authController.logoutUser)

// Punkt końcowy resetu hasła
//router.post('/reset-password', authController.resetPassword);

// Punkt końcowy zmiany hasła
//router.post('/change-password', authController.changePassword);

module.exports = router
// produces:
// *       - application/json
// *     parameters:
// *       - $ref: '#/parameters/username'
// *       - name: password
// *         description: User's password.
// *         in: formData
// *         required: true
// *         type: string
