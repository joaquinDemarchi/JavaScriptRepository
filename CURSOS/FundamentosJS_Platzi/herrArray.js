var frutas = ['bananas', 'manzanas', 'uvas', 'peras'];

//SINTAXIS BASICA///////////////////////////////////

print(frutas); // bananas,manzanas,uvas,peras

console.log(frutas); // (4) ['bananas', 'manzanas', 'uvas', 'peras']

console.log(frutas.length); //4

console.log(frutas[0]); //bananas
console.log(frutas[3]); //peras

//agregar valor ala final del arreglo

frutas.push('sandias');
console.log(frutas);

//eliminar ultimo elemento del arreglo

frutas.pop();

//agregar valor al inicio del arreglo

frutas.unshift('maracuyas');

//eliminar elementos del inicio del arreglo

frutas.shift();

//para saber en que posicion esta un elem dentro del arreglo

frutas.indexOf('peras'); //segun el orden inicial: 3

//invertir oreden de los elemnetos

frutas.reverse(); 
//segun el orden inicial:['peras', 'uvas', 'manzanas', 'bananas']
//para ordenar alfabeticamente

frutas.sort();

/*Slice, método que puede contener uno o dos argumentos, que indiquen
el inicio y parada de posiciones, pues devuelve los elementos contenidos
en el array, de acuerdo a los argumentos indicados, por ejemplo si a frutas,
le agregamos frutas.slice(1,3); obtendremos los que se encuentran en la posición 1, 2*/

frutas.slice(1,3); //segun el orden inicial:['uvas', 'manzanas']


//Convierte a todo el array en una cadena de elementos separados por comas

frutas.toString(); 

//metodo LENGTH -- devuelve la longitud del array

frutas.length();

//metodo SPLICE -- Cambia el contenido de un array removiendo elementos existentes y/o agregando nuevos elementos, hay tres maneras distintas de utilizar este método. 

/*Supresión: Cualquier número de elementos puede ser eliminado de la matriz especificando sólo dos argumentos: la posición del primer elemento que desea eliminar y el número de elementos a eliminar. Por ejemplo,*/

frutas.splice(0,2);
// devolvera  ['uvas', 'peras']

/*Inserción: Se puede insertar elementos en el array en una posición específica, proporcionando tres argumentos: la posición donde deseas agregar elementos,el número de elementos que desea eliminar y el elemento a insertar. Opcionalmente, se puede especificar una cuarta, quinta, o cualquier número de otros parámetros a insertar. Por ejemplo,*/

frutas.splice(1,0,"mandarina");
// devolvera  ['bananas', 'mandarina', 'manzanas', 'uvas', 'peras']

/*Si recuerdas en inserción, podemos optar como segundo parámetro el número de elementos a eliminar veamos cómo se comporta de agregar un número mayor a cero. */

frutas.splice(1,3,"mandarina");
// devolvera  ['bananas', 'mandarina']