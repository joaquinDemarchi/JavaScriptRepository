

var baseT = 4;
var lado1 = 4;
var lado2 = 4;


function esIsosceles(base,lado1,lado2){

    if (((base == lado1) && (base != lado2)) || 
    ((base != lado1) && (base == lado2)) ||
    ((lado2 == lado1) && (base != lado2))){
        trianguloEs = 'El triangulo es isosceles'
    } else {
        trianguloEs = 'El triangulo no es isosceles'
    }
    
    return trianguloEs;
}

function alturaIsosceles(base,lado1,lado2){

    let ladoN1 = Number(lado1);
    let ladoN2 = Number(lado2);
    let basen = Number(base);

    if (ladoN1 == ladoN2){
        let altura = Math.sqrt(ladoN1**2 - ((basen**2)/4));
        return  'La altura del isosceles es de ' +  altura + ' cm.';
    } else {
        return 'Las medidas ingresadas no pertenecen a un triangulo isosceles';
    }
}


console.log(esIsosceles(baseT,lado1,lado2));



//VINCULANDO HTML Y JS


function verificarIsosceles(){

    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputTrianguloB");
    const value3 = Number(base.value);

    let esONoIsos = esIsosceles(value3,value1,value2)

    alert(esONoIsos);

}


function calcularAltura(){

    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputTrianguloB");
    const value3 = Number(base.value);

    let altura = alturaIsosceles(value3,value1,value2);

    alert(altura);
}