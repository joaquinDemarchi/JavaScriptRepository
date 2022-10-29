//VENTAJAS Y DESVENTAJAS DEL MONOHILO NODE.JS

console.log('Hola Mundo');


// setInterval(function() {
//     console.log('sigo aqui')
// }, 1000);

//ó

// let i = 0;

// setInterval(function() {
//     console.log(i)
//     i++;
// }, 1000);

//ó

// setInterval(function() {
//     console.log(i)
//     i++;

//     if (i === 5){
//         console.log('forzamos el error')
//         var a = 3 + z; 
//     }
// }, 1000);

//La desventaja de ser monohilo es que al tener un solo error parara todo nuestro proceso 

//Una posible solucion es usar try y catch

let i = 0;
setInterval(function () {
    console.log(i++);
    try {
        if (i === 4) {
            var a = 3 + z;
        }
    } catch (error) {
        console.error(error)
    }
}, 1000)