//1ERA PARTE

//traigo un modulo

const modulo = require('./modulo');

//ejecutar funcion dentro del modulo

//console.log(modulo)//ni no exporto la fucnoon no me aprecera nada
// si exporto algo devolvera un objeto de lo que hay exportado

//modulo(); // ejecutara directamente la funcion

//2DA PARTE

console.log(modulo.segSaludo);//2da propiedad declarada
modulo.saludar()//funcion principal