const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get( '/', (req, res, next) => {
    console.log('Just a slash');
    // console.log(adminData.products);
    // res.sendFile(path.join( rootDir, 'views', 'shop.html'))
    const { products }  = adminData;
    console.log(products)
    res.render('shop', { 
        prods: products, 
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    } )
});

module.exports = router;