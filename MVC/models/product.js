const fs = require('fs');
const path = require('path');
const pathToProducts = path.join(
        path.dirname(process.mainModule.filename), 
        'data', 
        'products.json'
);

const getProductsFromFile = (callback) =>{
    fs.readFile(pathToProducts, (err, fileContent) => {
        if(err){
            return callback([]);
        }
        callback(JSON.parse(fileContent));
    })
}

function Product(title){
    this.title = title;

    this.save = () => {
        getProductsFromFile( (products) =>{
            console.log('products in save', products)
            products.push(this);
            fs.writeFile( pathToProducts, JSON.stringify(products), (err) =>{
                // console.log(products)
        });
        })
    };
}

Product.prototype.fetchAll = (callback) => {
   getProductsFromFile(callback);
}

module.exports = Product;