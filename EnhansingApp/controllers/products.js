// const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    console.log('You reached Apple');
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-apple',
        productsCSS: true,
        activeAddProduct: true,
        formsCSS: true
    });
}

exports.postAddProduct = (req, res, next) => {
    // products.push( { title: req.body.title } );
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const product = new Product();
    product.fetchAll( (products) => {
        console.log(products)
        res.render('shop/product-list', { 
            prods: products, 
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
    })
    })
}