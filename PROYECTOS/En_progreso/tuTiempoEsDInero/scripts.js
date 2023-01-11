var conceptoGasto = document.getElementById('concepto');
var gasto = document.getElementById('gasto');
var hsTrabMes = document.getElementById('hsTrabajadasXmes');
var salMes = document.getElementById('salarioMes');
var botonCalcular = document.getElementById('calcular');
var resultadoEnP = document.getElementById('resultado');

botonCalcular.addEventListener("click", convertir);




function convertir(){
   
   const conGas = conceptoGasto.value;
   const gas = gasto.value;
   const hs = hsTrabMes.value;
   const sal = salMes.value;

   const salXhs = sal / hs;
   const salXmin = salXhs / 60;

   const gastoEnMin = gas / salXmin;
   
   return resultadoEnP.innerText = gastoEnMin;
}