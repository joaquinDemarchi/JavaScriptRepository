var articulos = [
    {nombre: "harina", costo: 50},
    {nombre: "salsa", costo: 30},
    {nombre: "leche", costo: 100},
    {nombre: "queso crema", costo: 150},
    {nombre: "aceitunas", costo: 30}
];

//metodos para recorrer el array

//metodo FILTER  -- filtra e introduce en un array los elementos que cumplan con el parametro establecido

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 30
});

//metodo MAP -- Devuelve todos los nombre de una propiedad y los almacena como elementos dentro de un array

var articulosFiltrados = articulos.map(function(articulo){
    return articulo.nombre 
});

//metodo FIND -- Trae e las coincidencias, un objeto o elemento especifico del array. Devuelve un array nuevo con el objeto sin modificar el anterior
var encontrarProducto = articulos.find(function(producto){
    return producto.nombre === "salsa";
});

//metodo FOREACH -- Sirve para devolver una parte o categoria del array, en este caso el "nombre" de los elementos
articulos.forEach(function(producto){
    console.log(producto.nombre);
})

var a = ['elemento1','elemento2','elemento3','elemento4','elemento5'];

a.forEach(element => {
    console.log(element)
});

//metodo SOME -- una validacion que nos regresara verdadero o falso de acuerdo a si se cumple o no nuestra validacion.
//En este caso me regresara solo "true" si en mi lista existen articulos de costo menor a 30 

var productosBaratos = articulos.some(function(producto){
    return articulo.costo > 30;
})