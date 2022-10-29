require('dotenv').config();
console.log(process.env.NAME || '[Nombre no ingresado]');
console.log(process.env.LASTNM || '[Apellido no ingresado]');
console.log(process.env.AGE || '[Edad no ingresada]');


//El modulo denotv busca el archivo .env y trae los valores de las variables de entorno asignadas