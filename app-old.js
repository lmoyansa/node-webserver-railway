const http = require('http');

http.createServer((request, response) => {

    //response.writeHead(200);

    response.write('Hola mundo');

    response.end();

})
    .listen(8080);

console.log('Escuchando en el puerto: ', 8080)