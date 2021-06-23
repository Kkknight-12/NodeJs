const express = require('express');
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path');

// Adding new constant to store product values
const products = [ ];

// /admin/apple => GET
router.get( '/apple', (req, res, next) => {
    console.log('You reached Apple');
    // res.sendFile( path.join(rootDir, 'views', 'add-apple.html'))
    res.render('add-apple', { pageTitle: 'Add Product', path: '/admin/add-apple' });
})

// /admin/apple => POST
router.post( '/apple', (req, res, next) => {
    console.log(req.body);
    products.push( { title: req.body.title } );
    console.log(products)
    res.redirect('/');
})

exports.routes = router; 

// you will also need to export you product
exports.products = products;