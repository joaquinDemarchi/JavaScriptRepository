
const estilosPorDefecto = 'color: white;'

function crearImpresoraDeMensajes(tipo,estilos){
    return function mensaje(str){
        console.log(`%c ${tipo}: ${str}`, estilosPorDefecto + estilos);
    }
}

const error = crearImpresoraDeMensajes('Error','background:red;');
const warning = crearImpresoraDeMensajes('Warning','background:yellow;');
const exito = crearImpresoraDeMensajes('Exito','background:green;');
const info = crearImpresoraDeMensajes('Info','background:blue;');
const js = crearImpresoraDeMensajes('JS','background:black; color: yellow;');



error('Prueba en Rojo');
warning('Prueba en amarillo');
exito('Prueba en verde');
info('Prueba en azul');
js('Prueba en amarillo y negro');