
const listaPx = [
    100,
    200,
    300,
    400,
    500,
];


// let sumaPxs = 0;

// for (let i = 0; i < listaPx.length; i++){
    
//     sumaPxs = sumaPxs + listaPx[i];
// }

// console.log(sumaPxs)

// const promedioListaPx = sumaPxs / listaPx.length;

// console.log(promedioListaPx);


function calcMedArit(lista){

    // let sumaList = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumaList = sumaList + lista[i];
    // }

    //const promedioLista = sumaList / lista.length;

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return `El promedio del la lista es ${promedioLista}`;
}


console.log(calcMedArit(listaPx));

