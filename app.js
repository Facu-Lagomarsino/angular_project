const http = require('http');

// Creo servidor en variable por si quiero usarlo/agregar después
const server1 = http.createServer( (request, response) => {

    response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.write(''); // Escribe en pantalla

    if (request.url === '/get') {
        response.write('<h1>You rached GET!</h1>');
        if (request.method === 'GET') {
            response.end('GET'); 
        }
    }else if (request.url === '/post') {     
        response.write('<h1>You rached POST!</h1>');
        if (request.method === 'POST') {
            response.end('POST'); 
        }
    }else if (request.url === '/put') {    
        response.write('<h1>You rached PUT!</h1>');
        if (request.method === 'PUT') {
            response.end('PUT'); 
        }
    }else if (request.url === '/delete') {
        response.write('<h1>You rached DELETE!</h1>');
        if (request.method === 'DELETE') {
            response.end('DELETE'); 
        }
    }else {
    //  response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>404 Not Found</h1>');
    }
    response.end();

}).listen(3000, () => console.log('http://localhost:3000'));

