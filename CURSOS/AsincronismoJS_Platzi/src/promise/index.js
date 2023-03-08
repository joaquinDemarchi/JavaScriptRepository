// const promise = new promise(function (resolve, reject){
//    resolve ('hey! ')
// });

/* Ejemplo con vaquitas */
const cow = 2;

const countCows = new Promise(function(resolve, reject){
   if (cow > 10){
      resolve(`Las ${cow} vaquitas que tenemos son suficientes para producir la leche.`);
   } else {
      reject(`No hay la suficiente cantidad de vaquitas en la granja parar producir leche, solo tenemos ${cow}`);
   }
});


// Uso del then

countCows.then((result) => {
   //captura el resolve, NO PUEDE CAPTURAR EL REJECT
   console.log(result);
   //Para capturar el REJECT usamos catch, CON LA SIGUIENTE SINTAXIS.
   //Observar como el catch "nace" luego de que se cierra el parentesis del then y tiene una sintaxis muy similar.
}).catch((error) => {
   console.log(error);
   //otro elemento clave a la hora de usar promesas es finally
   //El finally se ejecuta en cualquiera de los casos anteriores.. haya o no suf. vaquitas. 
   //Recibe una funcion sin parametro. 
}).finally(() => {
   console.log('El conteo de vacas termino');
})

//TAMBIEN SE PUEDE UTILIZAR LA SIGUIENTE SINTAXIS

countCows
   .then((result) => {
   console.log(result);
})
   .catch((error) => {
   console.log(error);
})
   .finally(() => {
   console.log('El conteo de vacas termino');
})

