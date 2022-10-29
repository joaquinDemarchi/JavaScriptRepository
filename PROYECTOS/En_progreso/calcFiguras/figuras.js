console.log('HTML y JS conectados')

//CUADRADO

//datos de figura 

console.group('CUADRADO');

var ladoCuadrado = 0;

//calcular perimetro

var perimetroCuadrado = function(lado){
    let perimetro = lado*4;
    return 'El perimetro del cuadrado es de ' + perimetro + ' cm'
}

//calcular area

function areaCuadrado(lado){
    let area = lado*lado;
    return 'El area del cuadrado es de ' + area + ' cm'
}

console.log(perimetroCuadrado(ladoCuadrado));
console.log(areaCuadrado(ladoCuadrado));

console.groupEnd();


//TRIANGULO

console.group('TRIANGULO');

//datos de figura 

var ladoTriangulo1 = 0;
var ladoTriangulo2 = 0;
var baseTriangulo = 0;
var alturaTriangulo = 0;

//calcular perimetro

function perimetroTriangulo(lado1,lado2,base){
    let perimetro = lado1 + lado2 + base;
    return 'El perimetro del triangulo es de ' + perimetro + ' cm'
}

//calcular area

function areaTriangulo(base, altura){
    let area = base*altura;
    return 'El area del triangulo es de ' + area + ' cm'
}

console.log(perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo));
console.log(areaTriangulo(baseTriangulo,alturaTriangulo));

console.groupEnd();


//CIRCULO

console.group('CIRCULO');

//datos de circulo

const PI = Math.PI;
var radioCirculo = 0;

//calcular diametro

function diametroDelCirculo(radio){
    return radio * 2;
}

var diametroDelCirculoVar = diametroDelCirculo(radioCirculo);

var diametroDelCirculoCom = `El diametro del circulo es de ${diametroDelCirculo(radioCirculo)} cm`;


//calcular perimetro

function perimetroCirculo(radio,pi){
    let diametro = diametroDelCirculo(radio);
    let perimetro = Math.round(diametro * pi);
    return 'El perimetro del circulo es de aproximadamente ' + perimetro + ' cm'
}

//calcular area

function areaCirculo(pi,radio){
    let area = Math.round( pi * (radio**2));
    return 'El area del circulo es de aproximadamente ' + area + ' cm';
}

console.log(diametroDelCirculoCom);
console.log(perimetroCirculo(radioCirculo,PI));
console.log(areaCirculo(PI,radioCirculo));


console.groupEnd();


// interactuando con HTML

//Calcular Perimetro y area de cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    const result = document.getElementById("resultCua");

    return result.innerText = perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const result = document.getElementById("resultCua");

    return result.innerText = area;
}

//calcular perimetro y area de triangulo

function calcularPerimetroTriangulo(){

    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputTrianguloB");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);

    const result = document.getElementById("resultTri");

    return result.innerText = perimetro;
}

function calcularAreaTriangulo(){

    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputTrianguloB");
    const value3 = Number(base.value);

    const area = areaTriangulo(value1,value2,value3);

    const result = document.getElementById("resultTri");

    return result.innerText = area;
}

//Calcular diametro, perimetro y area del circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = `El diametro del circulo es de ${diametroDelCirculo(value)}cm`;
    const result = document.getElementById("resultCir");

    return result.innerText = diametro;
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value,PI);
    const result = document.getElementById("resultCir");

    return result.innerText = perimetro;
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(PI,value);
    const result = document.getElementById("resultCir");

    return result.innerText = area;
}