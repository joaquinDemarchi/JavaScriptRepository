

const pxComprDolar = document.querySelector("#pxDolar");
let pxComprDolar_v = pxComprDolar.value;
const botonGuardar = document.querySelector("#guardarPx");
const botonCalcProm = document.querySelector("#calcPxProm");

var preciosDeCompra = [];



guardarPx.addEventListener('click', guardarPxDolar);
botonCalcProm.addEventListener('click', calcularPromedioCompra);

function guardarPxDolar(pxComprDolar_v){
   console.log(pxComprDolar.value);
   return preciosDeCompra.push(Number(pxComprDolar.value));
}

function calcularPromedioCompra(lista){

   lista = preciosDeCompra;
   
   function sumarTodosElem(valAcum,nuevoVal){
      return valAcum + nuevoVal;
   }

   const sumList = lista.reduce(sumarTodosElem);

   const promedio = sumList / lista.length;
   
   return console.log(promedio); 
}
