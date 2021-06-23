const path = require('path')
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser'); // package name is body-parser

const app = express();
// app.set() allow us to set any value globally on our express application.
app.set('view engine', 'ejs');
app.set('views', 'views'); 

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false})); 

// adding css static files
app.use(express.static(path.join(__dirname, 'Public')));

// updating the way we import routes
app.use('/admin', adminRoutes.routes);

app.use(shopRoutes);

const errorController = require('./controllers/error')
// 404 page
app.use( errorController.get404 );

const server = http.createServer(app);

server.listen(3000)