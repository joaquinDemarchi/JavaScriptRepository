//array
var otroArray = ['MT', ' RB', ' FM']
//funcion
function unaFuncion (){
    return 'hola'
}


var bsPub = ['plazas', 'calles', 'edificios gubernamentales', 'hospitales', otroArray, unaFuncion]

bsPub.goo = 'kk'



for (value of bsPub){
    console.log(`Les ${value} se pagan con nuestros impuestos!!`)
}

console.log('\n\n Contenido de bsPub: \n\n');
console.log(bsPub);