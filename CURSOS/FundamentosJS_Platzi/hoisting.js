
console.log(miNombre);

var miNombre = "Joa";

//devolvera undefined
//Esta sucediendo Hoisting estamos mandando 
//a llamar una variable antes de inicializar o
// ejecutar ese codigo

funcion();

function funcion(){
    console.log("Hola " + miNombre);
}

var miNombre = "Joaquin";

//No importa que la funcion se haya inicializado antes de declararse
//devolvera Hola undefined
/* Ya que en js se inicializa primero las
funciones y las variables(en ese orden), por lo
tanto iniciara la funcion luego cuando la vea
y al no encontrardeclarada la variable dentro
de la misma le asignara el valor undefined */

var x = 5;

(function () {
    console.log("x:", x); // no obtenemos '5' sino 'undefined'
    var x = 10;
    console.log("x:", x); // 10
}());

/* JavaScript sólo utiliza el hoisting en declaraciones,
no inicializaciones. Si está utilizando una variable que
es declarada e inicializada después  (está después en el 
código) de usarla, el valor será undefined. 
El siguiente ejemplo demuestra ese comportamiento:
*/

var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Inicializa y