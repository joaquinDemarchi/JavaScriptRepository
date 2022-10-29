// function soyAsincrona() {
//     console.log('Hola, soy una funcion asincrona');
//     setTimeout(function (){
//         console.log('Llegue ultima por que soy asincrona');
//     },1000);
// }

// console.log('Inicio del proceso...')
// soyAsincrona()
// console.log('Terminando el proceso...')

//////////////////////////////////////////////bin

// function soyAsincrona(miCallback) {
//     setTimeout(function (){
//         console.log('Llegue ultima por que soy asincrona');
//         miCallback()
//     },1000);
// }

// console.log('Inicio del proceso...')
// soyAsincrona(function () {
//     console.log('Terminando el proceso...');
// });

////////////////////////////////////////////////////////////bin

function saludo(nombre, callbackSaludo) {
    setTimeout(function (){
        console.log(`Hola ${nombre}`);
        callbackSaludo(nombre)
    },1000);
}

function despedida(nombre, callbackDespedida) {
    setTimeout(function (){
        console.log(`Adios ${nombre}`);
        callbackDespedida()
    },2000);
}

//console de apertura
console.log('Inicio del proceso...')

//se ejecuta la fucnion saludo y se imprime el primer mensaje
saludo('Joaquin', function (nombre) {
    //luego esa misma funcion ejecuta la segunda e imprime el segundo mensaje
    despedida(nombre, function() {
        console.log('Terminando el proceso...');
    });
});
