
//Este miniprogram tomo dos numeros y realiza la operacion que se seleecion. Ejemplo de como usar los callbacks dentro de funciones (calculadora muy simple)

const num1 = 10;
const num2 = 5;


function sum (num1, num2){
   return num1 + num2;
}

function res (num1, num2){
   return num1 - num2;
}

function multp (num1, num2){
   return num1 * num2;
}

function div (num1, num2){
   return num1 / num2;
}



function calc (num1, num2, sum, res, multp, div ) {

   let resultado ; 
   switch (operacion){

      case 'SUMA':
         resultado = sum(num1,num2);
         break;
      case 'RESTA':
         resultado = res(num1,num2);
         break;
      case 'MULTIPLICAION':
         resultado = multp(num1,num2);
         break;
      case 'DIVISION':
         resultado = div(num1,num2);
         break;
   }

   

   return resultado
}

let operacion = prompt('QUE OPERACION DESEA REALIZAR: SUMA, RESTA, MULTIPLICACION o DIVISION')

calc(num1, num2, sum, res, multp, div );