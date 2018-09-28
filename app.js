const http = require('http');

http.createServer((req, resp) => {
    let salida = {
        nombre: "Miguel",
        edad: 32,
        url: req.url
    }
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    //resp.write('Hola Mundo');
    resp.write(JSON.stringify(salida));
    resp.end();
}).listen(8080);

console.log("Escuchando en el puerto 8080");