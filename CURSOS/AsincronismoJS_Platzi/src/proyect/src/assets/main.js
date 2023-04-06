const API1 = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const API2 = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=9'

const API3 = 5;

//recoge la etiqueta dond se mostrara el template de los videos
// pone el null al princio para que no de error si no hay ningun dato.
const content = null || document.getElementById('content');

//esto copiamos de la documentacion de la API
//agregue un option mas que corresponde a los par de 
//la API de otor canal de youtube, 
//Desde aqui
const options1 = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
  }
};


const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa0546dec7msh767d950b0bdaf69p1eeb99jsn06d97148b736',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
  const response = await fetch(urlApi, options1);
  const data = await response.json();
  return data;
}
//hasta aqui
//fucnion que se autoinvoca a si misma. OSSEA SE AUTOEJECUTA
//No es necesario llamarla para que empiece a funcionar

(async () => {
  try {
   //esperamos por la API
    const videos = await fetchData(API1);
    //CREAMOS un template qu se repetira por cada uno de los elementos
    //generaremos este trozo de html x c/ video
    //primeor accede a items  y genera un nuevo arreglo con map,
    //ese arreglo contendra varios de esos trocitos de html pero no
    //solo sera de HTML tambien se llenara con el contenido de la API
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0, 4).join('')}
    `;
   //presentamos todo el view en la seccion con id content
    content.innerHTML = view;

  } catch (error) {
   //no solomostrar el erro en consola sino tambien al usuario.
    console.log(error);
  }
})();