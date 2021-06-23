const http = require('http');
const path = require('path')
const bodyParser = require('body-parser'); // package name is body-parser

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
// const { ESRCH } = require('constants');

app.use(bodyParser.urlencoded({extended:false})); 
// it will register a middleware. so it will yield '/product' type middleware function. And will call next in the end so that the request also reaches other middleware but before it do that it need a whole body parsing we had to do manually previously.
//  It wont parse all kinds of body(files, json) but will parse bodies(sent through a form) like we a getting here.

app.use(express.static(path.join(__dirname, 'Public')));

app.use('/admin', adminRoutes);
// app.use( '/apple', (req, res, next) => {
//     console.log('You reached Apple');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Apple</button></input></form>');
// })

// app.post( '/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// })

app.use(shopRoutes);
// app.use( '/', (req, res, next) => {
//     console.log('Just a slash');
//     res.send('<h1>Just a slash</h1>');
// })

// 404 page
app.use( ( req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>')
    console.log(path.dirname((process.mainModule.filename)));
    res.status(404).sendFile(path.join(__dirname, "views" , "404.html"));
});


const server = http.createServer(app);

server.listen(3000)