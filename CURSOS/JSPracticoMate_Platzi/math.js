
//CUADRADO
//var

console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

//funcion para calcular perm de caudrad

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

console.groupEnd('Cuadrado') 




//TRIANGULO
//var

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;


const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;


//funcion para calcular perm de triangulo
function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd('Triangulo') 

console.log( '%c Joaquin', 'color: red; font-size: 20px;');


console.group('Circulo');

console.group('Circulo');
const radioCirculo = 5;
const diametroCirculo = radioCirculo * 2;

const perimetroCirculo = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo * radioCirculo) * Math.PI;
// const circleArea2 = (radioCirculo ** 2) * Math.PI;
// const circleArea3 = Math.pow(radio,2) * Math.PI;

console.log({radioCirculo, diametroCirculo, perimetroCirculo, areaCirculo});

function calcularCirculo(radio){
    return{
        diametro: radio * 2,
        circunsferencia: diametro * Math.PI,
        perimetro: ((radio * 2) * Math.PI).toFixed(3),
        area: (Math.pow(radio,2) * Math.PI).toFixed(3)
    }
}
console.groupEnd('Circulo');





var a = 1;
var b = 2;
var c = 3;
var d = 4;

console.log({
  a,
  b,
  c,
  d});


