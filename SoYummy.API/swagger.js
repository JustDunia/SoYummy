const swaggerJsdoc = require('swagger-jsdoc')

const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'SoYummy Project',
			version: '1.0.0',
		},
	},
	apis: ['./routes/auth.js', './routes/favorite.js'],
}
module.exports = swaggerJsdoc(swaggerOptions)
