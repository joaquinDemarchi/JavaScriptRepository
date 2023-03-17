
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'


async function fetchData(urlApi) {
   //traemos la informacion de la API con la funcion response
   const response = await fetch(urlApi);
   //transformamos la informacion a un objeto json
   const data = await response.json();
   //retornamos el objeto json
   return data;
}

const anotherFn = async (urlApi) => {
   try {
       //segun nuestro ejercicio debemmos llamar primero todos los productos
      const products = await fetchData(`${urlApi}/products`);
       //en el ejercicio, dice que llamamos el primer producto del array que generamos en el paso anterior con su id
      const product = await fetchData(`${urlApi}/products/${products[0].id}`);
       //segun el ejercicio debemos llamar la categoia del producto anterior
      const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

       //imprimimos los resultados en el mismo orden de los llamados de la funcion anterior
      console.log(products);
      console.log(product.title);
      console.log(category.name);
       //si hay errores, los capturamos con catch en su console.error
   } catch (error) {
      console.error(error);
   }
}
//llamamos nuestra funcion dandole como argumento la API la cual va a prepararse segun sean los llamados en la funcion anterior
anotherFn(API);
