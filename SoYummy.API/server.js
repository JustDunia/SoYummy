const app = require('./app');
const http = require('http');
const config = require('./config/config');
require('dotenv').config()

// const PORT = process.env.PORT || 3000

// app.listen(PORT, () => console.log(`Server running. Use our API on port: ${PORT}`))
const server = http.createServer(app);
server.listen(config.port, () => {
  console.log(`Server running. Use our API on port: ${config.port}`);
});