
/*HACEMOS EL LLAMADO DE XMLHTTPREQUEST */
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
/*con esto tenemos acceso al root de nuestra API*/
const API = 'https://api.escuelajs.co/api/v1';

/*ahora escribimos una funcion anaonima para recibir la solicitud 
que nos esta entregando el llamado de nuestra API.
Recibe 2 ARGUMENTOS: la url a la cual VA A HACER EL LLAMADO y 
el callback */
/*Con XMLHttpRequest vamos a poder controlar todo el llamado. 
Se puede hacer peticiones tambien con fetchData */

function fetchData(urlApi, callback) {
   /*creamos una variable que hara referencia a una nueva instancia 
   (CREADA con el new) de XMLHttpRequest. Todo esto se realiza para
   que el codigo sea mas legible.*/
   let xhttp = new XMLHttpRequest();

   /*aqui referenciamos y usamos open para ABRIR UNA NUEVA CONEXION
   y establecemso EL TIPO DE CONEXION que vamos a establecer 
   "GET"(obtener), la url que va a utilizar y "true" p/ habilitar 
   el open Y Especificar que la fucnion es asincronica. */
   xhttp.open('GET', urlApi, true);
   /*volvemos a referenciar y usamos uno de los elementos que nos 
   da XMLHttpRequest "on ready state change" que nos sirve para 
   ESCUCHAR VARIOS ESTADOS que tiene esta PETICION. Nos ayuda a 
   saber cuando esta DISPONIBLE LA INFO. reciebe una funcion que 
   valida el tipo de estado en el que se encuentrea. */
   xhttp.onreadystatechange = function(event){
      /*ESTO ULTIMO se hace con otro elemento,readyState === 4. 
      (el 4 significa SOLICITUD ENCONTRADA)*/
      if (xhttp.readyState === 4){
         /*ahora escuchamos el ESTADO con el  elemento STATUS, debe 
         ser 200 (que significa DOCUMENTO ENCONTRADO, RESPUESTA OK)*/
         if (xhttp.status === 200){
            /* si se valida todo esto ejecuta nuesto callback
            PRIMER elemento sera un nulo y el seg un tranfor. 
            de la informacion. Con JSON.parse() parseamos los datos
            obtenidos dela PETICION q hacemos c "xhttp.responseText"*/
            callback(null, JSON.parse(xhttp.responseText))
            /* Esta linea tranformara los datos que lleguen en un obj JSON*/
         } else {
            const error = new Error('Error: ' + urlApi)
            /*el callback en este caso reponde el error y el valor nulo  
            ya que no pasa ningun dato por lo tanto ni siquiera llega
             a realizar la validacion de status con ese null. */
            return callback(error, null)
         }
         /*ahora conf que va a pasar si hay un error. Usamos la funcion 
         Error y la ruta de la API donde hubo error */
      } 
   }
/* por ultimo al final de la funcion EJECUTAMOS toda esta logica 
haciendo el llamado de http con el elemento "send()" */
   xhttp.send(); 
}

/*ya tenemos la funcion PRINCIPAL para realizar el llamado.
AHORA LA DEBEMOS INTEGRARLA, pasarla nuestra segunda funcion que 
sera ejecutada dentro del callback la cual va a tener esta data
de ERROR o INFORMACION */
/*y luego ver como podemos hacer pafra que esa info nos la regres y mostrarla */

/*se invoca el metodo fetchData() pasandole como argumentos la varible API 
concatenada con la cadena 'products' para acceder a la URL de la API deseada, 
y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo 
   que almacena todos los objetos traidos por la API) */


fetchData(`${API}/products`, function(error1, data1){
   /*se valida si existe un error, en caso de que exista se detiene el proceso y se 
   imprime el error. ESTUDIAR tambein esta sintaxis del IF en una sola linea sin llaves.*/ 
   if (error1) return console.error(error1);
   /*se invoca nuevamente la función fetchData con el fin de acceder a un objeto 
   puntual del arreglo data1, se envia como parámetros la url de la API apuntando
    al atributo del primer objeto de arreglo data1 y nuevamente una función anónima. */
   fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
      /* si en este punto se identifica un error se imprime en consola 
      y se detiene el proceso*/
      if (error2) return console.error(error2);
      /* Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria,
      se envían como parametros la url de la API con la concatenación de 'Categories' y 
      el atributo Id de categoria del objeto data2 de la función anterior
      En este caso puntual se hace uso de Optional Caining el cual hace una evalucación
      de las propiedades de un objeto y en vez de arrojar un error devuelve undefined 
      en caso que la propiedad no exista o sea null.
      igual que las anteriores e envia una funcion anonima con 2 argumentos, 
      un objeto Error y un objeto de datos*/
      fetchData(`${API}/categories/${data2?.category?.id}`,function(error3, data3){
         /*se valida si existe error, en caso de que exista se detiene el proceso
          y se imprime el error */
         if (error3) return console.error(error3);
         /*Se imprime el objeto en la posición 1 del arreglo de los objetos 
         obtenidos en el metodo invocado inicialmente */
         console.log(data1[0]);
         /*Se imprime el titulo del objeto que se consultó en la seguna 
         invocación de la función */
         console.log(data2.title);
         /*Se imprime el nombre de la categoria a la que pertenece el objeto que se 
         consultó en la seguna invocación del método. */
         console.log(data3.name);
      }); 
   });
});


