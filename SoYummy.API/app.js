const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

const authRoutes = require('./routes/auth')
const recipesRouter = require('./routes/recipes')
const searchRouter = require('./routes/search')
const shoppingListRouter = require('./routes/shoppingList');
const favoriteRoutes = require('./routes/favorite');
const ingredientsRouter = require("./routes/ingredients");
const ownRecipesRoutes = require('./routes/ownRecipes')


const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.static('public'))

app.use('/auth', authRoutes);
app.use('/recipes', recipesRouter);
app.use('/search', searchRouter);
app.use('/favorite', favoriteRoutes);
app.use("/ingredients", ingredientsRouter);
app.use('/shopping-list', shoppingListRouter);
app.use('/ownRecipes', ownRecipesRoutes)

app.use((req, res) => {
	res.status(404).json({ status: 'error', code: 404, message: 'Not found' })
})

app.use((err, req, res, next) => {
	res.status(500).json({ status: 'error', code: 500, message: err.message })
})

module.exports = app
