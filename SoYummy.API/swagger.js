const swaggerJsdoc = require('swagger-jsdoc')

const swaggerOptions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'SoYummy Project',
			version: '1.0.0',
		},
		components: {
			schemas: {
				Recipe: {
					type: 'object',
					properties: {
						_id: {
							type: 'string',
						},
						title: {
							type: 'string',
						},
						category: {
							type: 'string',
						},
						area: {
							type: 'string',
						},
						instructions: {
							type: 'string',
						},
						thumb: {
							type: 'string',
						},
						// inne pola przepisu
					},
					// inne opcje definicji
				},
			},
		},
	},
	apis: ['./routes/*.js'],
}
module.exports = swaggerJsdoc(swaggerOptions)
