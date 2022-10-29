






var jugadores = ['Rooney','Mancherano','Tevez','Palermo']

function saludarJugadores(jugador){
    console.log(`Hola, ${jugador}`);// PRESTAR ATENCION A LAS COMILLAS INVERTIDAS
}

console.log(jugadores.length);

//FOR

for (var i = 0; i < jugadores.length; i++) {//"meintras la variable i sea menor a la longitude los jugadores, i se va a aumentar en uno(i++)"
    saludarJugadores(jugadores[i])// lo mismo que poner console.log(jugadores[i]);
};


for (var jugador of jugadores){
    saludarJugadores(jugador);
}

//WHILE

var familia = ['Lio','Martin','Sara','Mama'];

function saludar(familiar){
    console.log(`Hola ${familiar}`);
}

while(familia.length > 0){
    console.log(familia);//para ver que ocurre con array "familia" en c/ loop
    var familiar = familia.shift();
    console.log(familiar);//para ver que ocurre con var "familiar" en c/ loop
    saludar(familiar);
}

/* DEVUELVE

(4) ["Lio", "Martin", "Sara", "Mama"]
 Lio
Hola Lio

(3) ["Martin", "Sara", "Mama"]
 Martin
Hola Martin

(2) ["Sara", "Mama"]
 Sara
Hola Sara

["Mama"]
 Mama
Hola Mama

*/

var cualq = prompt('ingrese cuaqueir cosa');