const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const authenticate = require('../middleware/authenticate')

/**
 * @swagger
 * components:
 *   securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: User's name
 *         email:
 *           type: string
 *           description: User's email
 *         password:
 *           type: string
 *           description: User's password
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: User's email
 *         password:
 *           type: string
 *           description: User's password
 *     userResponse:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: User's name
 *         email:
 *           type: string
 *           description: User's email
 *     registerResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Message
 *         user:
 *           type: object
 *           properties:
 *              username:
 *                type: string
 *                description: User's name
 *              email:
 *                 type: string
 *                 description: User's email
 *              token:
 *                 type: string
 *                 description: User's token
 *     addRecipe:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Message
 *         user:
 *           type: object
 *           properties:
 *              username:
 *                type: string
 *                description: User's name
 *              email:
 *                 type: string
 *                 description: User's email
 *              token:
 *                 type: string
 *                 description: User's token
 */

// {
//   "title": "Title",
//   "category": "Breakfast",
//   "instructions": "testowe instrukcje",
//   "description": "jakiś opis",
//   "time": "20",
//   "ingredients": [
//       {
//       "id": "640c2dd963a319ea671e365b",
//       "measure": "2"},
//       {
//       "id": "640c2dd963a319ea671e3661",
//       "measure": "2"}
//       ]
// }
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
 *                $ref: '#/components/schemas/register'
 *      responses:
 *        201:
 *          description: Registration successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/registerResponse'
 *        400:
 *          description: Email is already in use / Validation error
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
 *                $ref: '#/components/schemas/login'
 *      responses:
 *        200:
 *          description: Signing in successful
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/registerResponse'
 *        400:
 *          description: Validation error
 *        401:
 *          description: Password is wrong
 *        404:
 *          description: User not found
 */
router.post('/login', authController.loginUser)

/**
 * @swagger
 * /auth/logout:
 *    post:
 *      description: User sign out
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        204:
 *          description: User signed out
 *        401:
 *          description: Not authorized
 *
 */
router.post('/logout', authenticate, authController.logoutUser)

/**
 * @swagger
 * /auth/current:
 *    get:
 *      description: Get current user
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Current user data
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/userResponse'
 */
router.get('/current', authenticate, authController.getCurrentUser)

/**
 * @swagger
 * /auth/subscribe:
 *    patch:
 *      description: Manage user's subscription
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Subscription status updated
 */
router.patch('/subscribe', authenticate, authController.manageSubscription)

module.exports = router
