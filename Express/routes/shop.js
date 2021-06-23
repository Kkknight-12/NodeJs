const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get( '/', (req, res, next) => {
   console.log('Just a slash');
    // res.send('<h1>Just a slash</h1>');

    // __dirname will take you the routes folder, 
    // from there you need to go back one folder then to view folder and then you shop.html
    // res.sendFile(path.join( __dirname, '../', 'views', 'shop.html'))
    res.sendFile(path.join( rootDir, 'views', 'shop.html'))
});

module.exports = router;