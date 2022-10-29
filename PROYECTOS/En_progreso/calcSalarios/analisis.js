//helpers

function esPar(numero){

    // if (numero % 2 === 0){
    //     return true;
    // } else {
    //     return false;
    // }  
    //Es lo mismo poner TOOODO eso que solo poner

    return (numero % 2 === 0);
} 
// con esta fucnion lo que hacemos es determinar si el numero de elementos del array es par o impar. Esto nos servira para saber cuantos elementos pertenecen a la mediana de la lista

function calcMedArit(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//mediana general

const salariosColombia = colombia.map(
    function (persona){
        return persona.salario;
    }
) //con estos estamos creando un array solo con los salarios. De cada elemento, que en este caso llamamos "persona" la funcion devolvera el valor de la llave indicada, que en este caso seria el valor de "salario".

const salariosColSorted = salariosColombia.sort(
    function (salarioA, salarioB){
        return salarioA - salarioB;
    }
)// Para ordenar la lista creada anteriormente con el metodo ya visto, sort


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){

        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcMedArit([personaMitad1,personaMitad2]);
        return mediana;

    } else {

        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGralColombia = medianaSalarios(salariosColSorted);
    
//mediana top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColombia.splice(spliceStart, spliceCount);


const medianaTop10Colombia = medianaSalarios(salariosColTop10);

