const http = require('http');

// from routes file we are calling function which will take request and reponse
const routes = require('./routes.js');

const server = http.createServer( routes.handler );

server.listen(3000);