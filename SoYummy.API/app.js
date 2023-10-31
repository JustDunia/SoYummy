const express = require('express')
const logger = require('morgan')
const cors = require('cors')
<<<<<<< Updated upstream
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

const authRoutes = require('./routes/auth')
const recipesRouter = require('./routes/recipes')
=======
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
>>>>>>> Stashed changes

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.static('public'))

// routy przeniesione wyżej, ponieważ gdy były na samym końcu, aplikacja zwracała 404
app.use('/auth', authRoutes)
<<<<<<< Updated upstream
app.use('/recipes', recipesRouter);
=======
app.use('/user', userRoutes)
>>>>>>> Stashed changes

app.use((req, res) => {
	res.status(404).json({ status: 'error', code: 404, message: 'Not found' })
})

app.use((err, req, res, next) => {
	res.status(500).json({ status: 'error', code: 500, message: err.message })
})

module.exports = app
