const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';
const API_URL_FAVOTITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=c08d415f-dea7-4a38-bb28-7b2188202e46';

//OTRA FORMA DE ORDENAR EL CONTENIDO API
/* un array de las partes de la API
los quey parameter, endpoints y apy key si tiene
que luego unimos con cun el metodo join("") */
/*const API_URL_FAVOURITES = [
  "https://api.thecatapi.com/v1/favourites",
  "?limit=2",
  "&order=Asc",
  `&api_key=${API_KEY}`,
].join(""); */


// span en el que capturaremos  error si es que hay 
const spanError = document.getElementById('error')

async function loadRandomMichis() {
  //el res nos dice como quedoel status code o estado de lasol http
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Random')
  console.log(data)

  /* captura error si no es estado 200 y lo INSERTAMOS en el HTML*/
  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    
    //CARGAMOS la direcion de las imagens a los "SRC" de las imagenes.
    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavoritesMichis() {
  const res = await fetch(API_URL_FAVOTITES);
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  /* captura error si no es estado 200.. tambein muestra el mensaje
   añadiendo res.status*/
  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

async function saveFavouriteMichis(){
  const res = await fetch(API_URL_FAVOTITES, {
    //En solicitudes POST debemos ponee headers por defecto si osi
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      //el JSON.stringify evita que nos topemos con errores
      //para que el prog entienda cualq lenguage
      image_id: JSON.stringify({
        image_id: 'dje'
      })
    }
  });
  console.log('Save');
  console.log(res);
}

loadRandomMichis();
loadFavoritesMichis();