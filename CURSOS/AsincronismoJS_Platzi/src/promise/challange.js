/*Fetch: Nos permite realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso.
//Hay que instalar en la terminal -> npm i node-fetch8*/


import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//FETCH POR DEFECTO YA ES UNA PROMESA

function fetchData(urlApi){
   return fetch(urlApi);
};

// // ahora podemos hacer el llamado
// fetchData(`${API}/products`)
// //usamos .then para saber que hay en su respuesta
// //podemos por ejemplo pasar el resultado
// //a un obejto json
//    .then(response => response.json())
//    //con la siguiente linea taraeremos TODOS LOS PRODUCTOS de nuestra API
//    .then(products => {
//       //y agregamenos un console para ver los prod. 
//       console.log(products);
//    })
//    /*por ultimo agregamos un then que no captura nada
//    pero si devuelve un console.*/
//    .then(() => {
//       console.log('then extra');
//    })
//    .catch(error => console.log(error));


fetchData(`${API}/products`)
   .then(response => response.json())
   .then(products => {
      console.log(products);
      return fetchData(`${API}/products/${products[78].id}`)
   })

   .then(response => response.json())
   .then(product => {
      console.log(product.title);
      return fetchData(`${API}/categories/${product.category.id}`)
   })

   .then(response => response.json())
   .then(category => {
      console.log(category.name);
   })
   
   .catch(err => console.error(err))
   .finally(() => console.log('Final del Fetch'))


/*COMPORTAMIENTO DE TODO EL CODIGO

   1. Está importando la función de búsqueda del paquete de búsqueda de nodos.
   2. Está definiendo una constante llamada API que contiene la URL de la API.
   3. Está definiendo una función llamada fetchData que toma una URL como parámetro y devuelve una promise.
   4. Está llamando a la función fetchData con la URL del punto final de los productos.
   5. Está usando el método .then para obtener la respuesta y convertirla a JSON.
   6. Está usando el método .then para obtener el primer producto de la matriz.
   7. Está llamando a la función fetchData con la URL del punto final del producto.
   8. Está usando el método .then para obtener la respuesta y convertirla a JSON.
   9. Está usando el método .then para obtener el título del producto.
   10. Está llamando a la función fetchData con la URL del punto final de la categoría.
   11. Está usando el método .then para obtener la respuesta y convertirla a JSON.
   12. Está usando el método .then para obtener el nombre de la categoría.
   13. Está usando el método .catch para detectar cualquier error.
   14. Está utilizando el método .finally para registrar un mensaje en la consola.

*/