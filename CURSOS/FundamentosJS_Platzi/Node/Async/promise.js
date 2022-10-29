
function saludo(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(function (){
            console.log(`Hola ${nombre}`);
            // resolve(nombre);
            reject(new Error('ERROR'));
        },1000);
    })
    
}

function despedida(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            console.log(`Adios ${nombre}`);
            resolve(nombre)
            reject(new Error('ERROR'))
        },2000);
    })
    
}

//console de apertura
console.log('Inicio del proceso...')

saludo('Joaquin')
    // .then(nombre => {
    //     return despedida(nombre)
    // })
    .then(despedida)
    .then((nombre) => {
        console.log('proceso terminado '+nombre);
    })
    .catch(error => {
        console.error('Ha habido un error');
        console.error(error);
    })