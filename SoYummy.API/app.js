const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.static('public'))

app.use((req, res) => {
	res.status(404).json({ status: 'error', code: 404, message: 'Not found' })
})

app.use((err, req, res, next) => {
	res.status(500).json({ status: 'error', code: 500, message: err.message })
})

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

module.exports = app