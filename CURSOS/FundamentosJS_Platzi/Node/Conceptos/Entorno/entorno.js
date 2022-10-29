//Agregar valor de determinadas variables desde el shell


let nombre = process.env.NOMBRE || '[Falta ingresar nombre]';
//le estoy indicando que la var asignada sera NOMBRE y que en el caso de no asignarse se colocara por defecto "sin nombre"
let web = process.env.WEB || '[Falta ingresar web]';
//Buena practica en declarar las variables de entorno en MAYUCULAS (NOMBRE, WEB...)

console.log('Hola ' + nombre);
console.log('Mi web es  ' + web);

