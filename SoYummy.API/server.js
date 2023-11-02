const app = require('./app')
require('dotenv').config()
const mongoose = require('mongoose');

// musi pozostać możliwość stosowania domyślnego portu, na wypadek gdyby ktoś nie miał .env
const PORT = process.env.PORT || 3000
const URI = process.env.URI

const connection = mongoose.connect(URI, {
	useUnifiedTopology: true,
})

// nie wiem dlaczego i po co to zostało zmienione to: app.listen...i dodane to:
// const server = http.createServer(app), server.listen...
// app jest aplikacją express, więc już co do zasady obsługuje http
// i danych typu secretKey raczej nie trzymamy w zwykłym pliku config tylko w .env

connection
	.then(() => {
		console.log('Database connection successful')
		app.listen(PORT, () => console.log(`Server running. Use our API on port: ${PORT}`))
	})
	.catch(err => {
		console.log(`Server not running. Error message: ${err.message}`)
		process.exit(1)
	})

