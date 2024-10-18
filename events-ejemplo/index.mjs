import { EventEmitter } from "events";

//Creando una instancia de EventEmitter

const emisor = new EventEmitter();

//Definiendo un evento personalizado

emisor.on('saludo', (nombre) => {
    console.log(`Hola! ${nombre}`);
    
});

//Emitiendo el saludo

emisor.emit('saludo', 'mundo');