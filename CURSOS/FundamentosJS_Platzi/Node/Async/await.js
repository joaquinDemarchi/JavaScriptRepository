async function saludo(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(function (){
            console.log(`Hola ${nombre}`);
            resolve(nombre);
            reject(new Error('ERROR'));
        },1000);
    })
    
}

async function despedida(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            console.log(`Adios ${nombre}`);
            resolve(nombre)
            reject(new Error('ERROR'))
        },2000);
    })
    
}

async function main() {
    let nombre = 'joa'
    let novia = 'Sara'
    let hno = 'Martin'
    let mama = 'Miriam'
    await saludo(nombre);
    await saludo(novia);
    await saludo(hno);
    await saludo(mama);
    await despedida('a todos');
    console.log('Proceso finalizado.')
}

console.log('Iniciando proceso de prueba...')
main();
console.log('Proceso iniciado.')


setTimeout( () => {
    console.log(`Adios`)
   },2000);