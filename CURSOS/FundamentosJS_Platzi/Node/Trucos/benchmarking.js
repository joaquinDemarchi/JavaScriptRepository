// //prueba de como medir cuanto tardan los procesos

// let suma = 0;

// //abro el console.time
// console.time('Tiempo de carga ');

// for (let i = 0; i < 100; i++) {
//     suma += 1;
// }
 //cierro el console.time 
 //y loo que hara es medir el tiempo de eejcecion de todo lo que este dentro 
// console.timeEnd('Tiempo de carga ')

// Tiempo de carga:: 0.089ms

// -----------------------------------------------------

let suma = 0;
let suma2 = 0;

console.time('Todo el proceso: ')

console.time('Tiempo bucle');
for (let i = 0; i < 1000; i++) {
    suma++;
}
console.timeEnd('Tiempo bucle');

console.time('Tiempo bucle 2');
for (let j = 0; j < 1000; j++) {
    suma2 = suma2 + j;
}
console.timeEnd('Tiempo bucle 2');

// Tiempo bucle: 0.086ms
// Tiempo bucle 2: 0.022ms

//abro el console time de la funcion asincrono
console.time('asincrono');
console.log('Empieza el proceso asincrono')

//inicializo la funcion 
asincrona()
    .then(() => {
        console.timeEnd('asincrono') //cerra el console timeEnd dentro de la funcion asincrona
    }); 

console.timeEnd('Todo el proceso: ')

//declaracion de funcion asincrona
function asincrona(){
    return new Promise( (res,rej) => {
        setTimeout(function(){
            console.log('Termina el proceso asincrono');
            res();
        })
        
    })
}

// Tiempo bucle: 0.104ms
// Tiempo bucle 2: 0.024ms
// Empieza el proceso asincrono
// Todo el proceso: : 4.897ms
// Termina el proceso asincrono
// asincrono: 2.149ms