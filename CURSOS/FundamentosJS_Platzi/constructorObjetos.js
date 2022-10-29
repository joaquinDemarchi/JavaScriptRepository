var pc = {
    marca: "HP",
    modelo: "Pavilion",
    procesador: "Intel I5 9th Generation",
    pantalla: "14 pulgadas, Full HD",
    pesoKg: 3.3,
    annio:"2016"
}

function favoritePc(marca,modelo,procesador){
    this.marca = marca;
    this.modelo = modelo;
    this.procesador = procesador;
}

var pc1 = new favoritePc ("Lenovo","360","I7 10 Gen");


// RETO/////




function newPc(marca, modelo, procesador) {
    this.marca = marca;
    this.modelo = modelo;
    this.anno = procesador    
}

//Variables a usar
var  PCs = [];
let  PCsAgregadas = 0;


//Preguntamos el numero de autos a ingresar por parte del cliente
let numeroPCs = prompt("Cuantas PCs desea ingresar?");


//Generamos el loop para ingresar los autos deseados

while (numberAuto > recordAuto) {
    let marca = prompt("Marca: ");
    let modelo =  prompt("Modelo :");
    let anno = prompt("Anno: ")

// Empezamos a guardar la informacióin en la funcion global Autos
var newAuto = new newAutos(marca, modelo, anno);

// Agrego cada auto al final del array
Autos.push(newAuto);

//Contador de autos registrados
recordAuto++;

}

console.log(Autos);

//////////////////////


function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
var autos = [];
for(let i = 0 ; i < 30 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}

//////////bin

function player(equipo,nombre,posicion){
    this.equipo = equipo;
    this.nombre = nombre; 
    this.posicion = posicion;
}


var playerN1 = new player("Manchester United", "Edwin Van Der Sar", "POR");
var playerN2 = new player("Boca", "Rolando Schiavi", "DFC");var playerN3 = new player("Juventus", "Giorggio Chiellini", "DFC");
var playerN4 = new player("Manchester United", "Patrice Evra", "DFI");
var playerN5 = new player("Bayer Munich", "Philipp Lahm", "DFD");
var playerN6 = new player("Juventus", "Andrea Pirlo", "MC");
var playerN7 = new player("Manchester United", "Paul Scholes", "MC");
var playerN8 = new player("Boca", "Juan Roman Riquelme", "MCO");
var playerN9 = new player("Milan AC", "Zlatan Ibraimovich", "DC");
var playerN10 = new player("FC Barcelona", "Lionel Messi", "ED");
var playerN11= new player("Mnachester United", "Ryan Giggs", "EI");

myTeam = [];

console.log(myTeam);

myTeam.push(playerN1,playerN2,playerN3,playerN4,playerN5,playerN6,playerN7,playerN8,playerN9,playerN10,playerN11);

console.log(myTeam);

document.write(myTeam);