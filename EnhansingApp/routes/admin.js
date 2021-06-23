const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')

// /admin/apple => GET
router.get( '/apple', productController.getAddProduct )

// /admin/apple => POST
router.post( '/apple', productController.postAddProduct)

exports.routes = router; 
// module.exports = router // // will also work as we are just exporting single function


// now we will not be exporting out 
// you will also need to export you product
// exports.products = products;
