const express = require('express');
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path');

// /admin/apple => GET
router.get( '/apple', (req, res, next) => {
    console.log('You reached Apple');
    // res.send('<form action="/admin/apple" method="POST"><input type="text" name="title"><button type="submit">Add Apple</button></input></form>');
    // res.sendFile(path.join( __dirname, '../', 'views', 'add-apple.html' ))
    // console.log(path.dirname((process.mainModule.filename)))
    res.sendFile( path.join(rootDir, 'views', 'add-apple.html'))

})

// /admin/apple => POST
router.post( '/apple', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router; 