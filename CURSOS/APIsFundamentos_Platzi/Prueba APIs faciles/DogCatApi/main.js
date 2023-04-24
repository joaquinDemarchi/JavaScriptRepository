const API = 'https://api.thedogapi.com/v1/images/search';


async function obtenerPerrito() {
   const response = await fetch(API);
   const data = await response.json();
   const img = document.getElementById('imagen');
   return img.src = data[0].url;
};

obtenerPerrito()

const boton = document.getElementById('boton')
boton.onclick = obtenerPerrito;

