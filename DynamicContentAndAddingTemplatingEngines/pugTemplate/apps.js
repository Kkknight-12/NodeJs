const http = require('http');
const path = require('path')
const bodyParser = require('body-parser'); // package name is body-parser

const express = require('express');

const app = express();

// app.set() allow us to set any value globally on our express application.
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false})); 

// adding css static files
app.use(express.static(path.join(__dirname, 'Public')));

// updating the way we import routes
app.use('/admin', adminData.routes);

app.use(shopRoutes);

// 404 page
app.use( ( req, res, next) => {
    console.log(path.dirname((process.mainModule.filename)));
    // res.status(404).sendFile(path.join(__dirname, "views" , "404.html"));
    res.status(404).render('404', {pageTitle: 'Page not Found'});
});

const server = http.createServer(app);

server.listen(3000)