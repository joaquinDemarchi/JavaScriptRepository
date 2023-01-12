var conceptoGasto = document.getElementById('concepto');
var gasto = document.getElementById('gasto');
var hsTrabMes = document.getElementById('hsTrabajadasXmes');
var salMes = document.getElementById('salarioMes');
var botonCalcular = document.getElementById('calcular');
var resultadoEnP = document.getElementById('resultado');

botonCalcular.addEventListener("click", convertir);




function convertir(){

   //declaracion de variables poner fuera de la funcion y probar si funciona dandole parametros que necesite.

   const gas = gasto.value;
   const hs = hsTrabMes.value;
   const sal = salMes.value;

   const salXhs = sal / hs;
   const salXmin = salXhs / 60;

   var gastoEnMin = Math.ceil(gas / salXmin);
   var minRestantes = Number(gastoEnMin % 60);

   // console.log({gastoEnMin, minRestantes})

   if (gastoEnMin < 60){
      if (gastoEnMin == 1){
         //crear otra variable que englobe todo el output
         // var outputFinal = gastoEnMin + ' minuto.'
         //o 
         // var outputFinal = gastoEnMin + ' horas y ' + minRestantes + ' minuto.'
         //dejando un solo return asi..
         //return resultadoEnP.innerText = outputFinal.
         return resultadoEnP.innerText = gastoEnMin + ' minuto';
      } else {
         return resultadoEnP.innerText = gastoEnMin + ' minutos';
      }
   } else {
      if (minRestantes == 0){

         gastoEnMin = gastoEnMin / 60;
   
         if (gastoEnMin == 1){
            return resultadoEnP.innerText = gastoEnMin + ' hora.';
         } else {
            return resultadoEnP.innerText = gastoEnMin + ' horas.';
         }
      } else {
         gastoEnMin = Math.floor( gastoEnMin / 60);
   
         if (gastoEnMin == 1) {
            
            if (minRestantes == 1){
               return resultadoEnP.innerText = gastoEnMin + ' hora y ' + minRestantes + ' minuto.';
            } else { 
               return resultadoEnP.innerText = gastoEnMin + ' hora y ' + minRestantes + ' minutos.';
            }
         } else {
            if (minRestantes == 1){
               return resultadoEnP.innerText = gastoEnMin + ' horas y ' + minRestantes + ' minuto';
            } else { 
               return resultadoEnP.innerText = gastoEnMin + ' horas y ' + minRestantes + ' minutos';
            }
         }
      }
   }

   //crear otra funcion que le agregue algo al output pelado. Como "Perdiste xxxx de tu vida con ese gasto."
}


