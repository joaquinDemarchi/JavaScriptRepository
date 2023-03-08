import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";


function postData(urlApi, data) {
  const response = fetch(urlApi, {
   //Los demas parametrods del fetch los ponemos con {}
   /*declaaramos que queremos hacer en el metodo, en esta caso GUARDAR DATOS*/
    method: "POST",
    //el modo tiene que ver con lso permisos que tendra
    mode: "cors",
    //credenciales, 
    credentials: "same-origin",
    //cabecera para que nos reconozca en la consola
    //en este caso especifica el tipo de archivo
    headers: {
      "Content-Type": "application/json",
    },
    //el body es la info que le quiero transmitir a la API
    //transforma primero ya que viene como JSON
    body: JSON.stringify(data),
  });
  return response;
}

// el formatod e los datos o campos que debemos rellenar 
// lo define la documentacion de la API en esta caso es..
const data = {
  title: "New Product Course",
  price: 9999,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

//finalmente ejecutamos la fucnion.
postData(`${API}/products`, data)
// le decimos que devuelva lo que se envia pero 
//previamento convertimos el JSON.
  .then((response) => response.json())
  .then((data) => console.log(data));


// Y LISTO AGREGAMOS un nuevo producto a l API