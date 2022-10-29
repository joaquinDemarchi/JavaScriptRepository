const lista1 = [
    1,
    2,
    3,
    4,
    10,
    3,
    4,
    7,
    9,
    2,
    2,
    2,
];

// const lista1Count = {}

// lista1.map(

//     function(elemento){

//         if (lista1Count[elemento]){

//             lista1Count[elemento] += 1
//         } else {
//             lista1Count[elemento] = 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function(valorAcumulado,nuevoValor){
//         return valorAcumulado[1] - nuevoValor[1]
//     }
// )
// //objects.entries permite convertir un objeto en un array

// const modaArray = lista1Array[lista1Array.length-1];

// const modaResult = `La moda de la lista es ${modaArray[0]}, el cual aparece ${modaArray[1]} veces en la misma.`

// console.log(modaResult);

//AHORA LO HACEMOS UNA FUNCION

function calcularModa (lista){

    const listaCount = {}

    lista.map(

        function(elemento){

            if (listaCount[elemento]){

                listaCount[elemento] += 1
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado,nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]
        }
    )

    const modaArray = listaArray[listaArray.length-1];

    const modaResult = `La moda de la lista es ${modaArray[0]}, el cual aparece ${modaArray[1]} veces en la misma.`

    return modaResult;
}


console.log(calcularModa(lista1));