
const listaPx = [
    200,
    300,
    500,
    2000,
    11,
    555,
    100000,
    7000000,
    3000,
    93290482398872673,
];


function ordenarLista(lista){
    var listaOrdenada = lista.sort(function(a,b){return a - b;})
    return listaOrdenada;
}

function calcMediana(listaDesordenada){

    var lista = ordenarLista(listaDesordenada)

    let listaOrdenada = lista.sort(function(a,b){return a - b;})

    let mitadLista = Math.floor(lista.length / 2);

    if (lista.length % 2 == 0){   

        mitadLista = (lista.length / 2) - 1;
    
        let mitadListaPar = Math.floor(lista.length / 2 );

        let promedio = (listaOrdenada[mitadLista] + listaOrdenada[mitadListaPar]) / 2

        return `La mediana de la lista es ${parseInt(promedio)}`;
    }

    return `La mediana de la lista es ${lista[mitadLista]} `;
}


console.log(calcMediana(listaPx));

console.log(listaPx.sort(function(a,b){return a - b;}))

