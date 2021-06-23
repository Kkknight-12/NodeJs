const http = require('http');

// http helps in launching a server or sending a request to another server.
// like send coordinate and get back address

// receive incoming message and a response object
function reqListner( req, resp ){
    console.log(req);

}
// request listner is a function that will execute for every incoming request
const server = http.createServer(reqListner);

// listen starts a process where node js will not immedietly exist our script but instead
// node js will keep this script running and will listen for incoming request
server.listen(3000);

/*  
now write iin terminal
$ node apps.js
*/

/* 
anonymous function
const server = http.createServer( (req, resp) => {
    console.log(req);
});

server.listen();
 */