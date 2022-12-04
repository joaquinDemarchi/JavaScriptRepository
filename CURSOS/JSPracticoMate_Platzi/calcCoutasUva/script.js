

// declaro las variables
var cuotasRestantes = Number(prompt('ingrese cuotas restantes por pagar:'));
var montoDeUltmCuota = Number(prompt('ingrese monto de la ultima cuota:'));
var inflacion = Number(prompt('ingrese inflacion protyectada para los prox. 12 meses'));
var uva = inflacion/100;
var variacionUvaMensual = uva/12;

var coutasPorMes = [];


// ciclo que añade las outas al array y cualcula el % de suba mensual en base al dato de inflacion proyectado

for (var i = 1; i <= cuotasRestantes; i++){
   
   const incremento = variacionUvaMensual;

   let nuevaCuota = Math.floor(montoDeUltmCuota + (montoDeUltmCuota*incremento));

   console.log('La cuota del mes ' + i + ' sera :   $' + nuevaCuota)

   coutasPorMes.push(nuevaCuota)

   montoDeUltmCuota = nuevaCuota;

}

//corroborar que devuelve
// console.log(coutasPorMes);

var sumaTodasCoutas = coutasPorMes.reduce((a,b)=> a+b);

//respuesta general devuelta
console. log("El monto total a pagar teniendo en cuanta una inflacion del " + inflacion + "% para los proximos 12 meses es de $" + sumaTodasCoutas );
