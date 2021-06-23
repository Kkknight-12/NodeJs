const path = require('path');
// console.log(path.dirname((process.mainModule.filename)))
// /Users/knight/FrontEnd_Projects/NodeJs/Max/Express

module.exports = path.dirname((process.mainModule.filename))
// module.exports = path.dirname((require.main.filename));