// const http = require('http');

// function reqListner( req, resp ){
//     console.log(req.url, req.method, req.headers);
//     process.exit()
    

// }
// const server = http.createServer(reqListner);
// server.listen(3000);



// //////////////////////
// Routing the Request //
// //////////////////////
const http = require('http');
const fs= require('fs');

function reqListner( req, resp ){
    const url = req.url;
    const method = req.method;
    if( url === '/' ){
        resp.write('<html>');
        resp.write('<head><title> Enter Message </title></head>')
        resp.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        resp.write('<html>');
        return resp.end();
    }
    // as we are redirecting the user to /message page with post request, lets handle what should happend when user redirect to that
    if ( url === '/message' && method === 'POST' ){
        const body = []
        req.on( 'data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on( 'end', () =>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
            const message = parsedBody.split("=")[1]
            
            // ////////////////////////////////
            // writing Asynchronous function //
            // ////////////////////////////////
            fs.writeFile( 'messsage.txt', message, (err) =>{
                resp.statusCode = 302;
                resp.setHeader( 'Location', '/' );
                return resp.end();
            });
        })
    }
    console.log(req.url, req.method, req.headers);
    resp.setHeader( 'Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head><title> creating page from node js </title></head>')
    resp.write('<body><h1> Hello Ninjas </h1></body>')
    resp.write('<html>');
    resp.end();
    // process.exit()
}
const server = http.createServer(reqListner);

server.listen(3000);