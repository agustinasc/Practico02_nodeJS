import http from 'http';

//Crear u servidor HTTP basico

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text-plain');
    response.end('Hola Mundo!')
})

//Configurar el servidor para que escuche en el puerto 3000
server.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
    
})