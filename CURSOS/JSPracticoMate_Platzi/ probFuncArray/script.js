function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}

function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }

  //se puede reemplazar el for por un array.forEach()
//const arr2 = [1, 2, 6, 6, 3, 4, 5, 4, 5, 1, 2, 4, 4];

// const histogram = array => {
//     const obj = new Object();
//     array.forEach(element => !obj[element] ? obj[element] = 1 : obj[element]++);
//     return obj;
// };
// console.log(histogram(arr2));

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1)
  // lo ubicamos porsu indice 2 veces por q lista ordenada es un array bidimensional
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const listaMaxNumberAnterior = listaOrdenada[listaOrdenada.length - 2];
  

  //La moda es el término que aparece la mayor cantidad de veces dentro de un conjunto de datos.
//Si hay más de un término que aparece la mayor cantidad de veces, entonces no hay moda.

  if( listaMaxNumber[1] === listaMaxNumberAnterior[1] ) {
    const moda = 'No hay moda';
  } else {
    const moda = listaMaxNumber[0];
  }
  // console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
  // console.log('La moda es: ' + listaMaxNumber[0]);
  return moda;
}

function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
  const listaEsPar = esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

function calcularPromedio(lista) {
  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);  
  const promedio = sumaLista / lista.length;
  // console.log(promedio);
  return promedio;
}

function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    // if (valorAcumulado > nuevoValor) {
    //   return 1;
    // } else if (valorAcumulado == nuevoValor) {
    //   return 0;
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1;
    // }

    return valorAcumulado - nuevoValor;
    // return nuevoValor - valorAcumulado;
    // return 5 - 10 -> -5;
    // return 5 - 5 -> 0;
    // return 10 - 5 -> 5;
  }
  
  // const lista = listaDesordenada.sort(ordenarListaSort);
  const lista = listaDesordenada.sort((a,b) => a-b);
  
  return lista;
}

function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}