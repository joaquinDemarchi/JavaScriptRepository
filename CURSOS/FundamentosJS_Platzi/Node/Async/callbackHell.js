function saludo(nombre, callbackSaludo) {
    setTimeout(function (){
        console.log(`Hola ${nombre}`);
        callbackSaludo(nombre)
    },1000);
}

function hablar(callbackhablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla..');
        callbackhablar();
    },1000);
}

function despedida(nombre, callbackDespedida) {
    setTimeout(function (){
        console.log(`Adios ${nombre}`);
        callbackDespedida()
    },1000);
}

//console de apertura
console.log('Inicio del proceso...')

//se ejecuta la fucnion saludo y se imprime el primer mensaje
// saludo('Joaquin', function (nombre) {
//     //luego esa misma funcion ejecuta la segunda e imprime el segundo mensaje
//     hablar(function(){
//         hablar(function () {
//             hablar(function () {
//                 despedida(nombre, function() {
//                     console.log('Terminando el proceso...');
//                 });
//             })
//         })
//     })
// });

//En esta parte del código uso funciones recursivas porque estoy llamando a conversacion dentro de si misma. y mediante un If como estructura de control le digo que cantidad de veces va a  ejectuarse la funcion hablar.
function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        despedida(nombre, callback);
    }
}

// --

console.log('Iniciando proceso...');
saludo('Joaquin', function (nombre) {
    conversacion(nombre, 10, function() {
        console.log('Proceso terminado');
    });
});

