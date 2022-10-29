// definicion de variables


const url = 'http://localhost:3000/api/articulos/'

const contenedor = document.querySelector('tbody')
let resultados = ''
const modalArticulo = new bootstrap.Modal(document.getElementById('myModal'), options)
const formArticulo = document.querySelector('form')

//INPUTS
const descripcion = document.querySelector('descripcion')
const precio = document.querySelector('precio')
const stock = document.querySelector('stock')

let opcion = '';

btnCrear.addEventListener('click', ()=>{
    descripcion.value = '';
    precio.value = '';
    stock.value = '';
    opcion = 'crear's
})

//FUNCION PARA MOSTRAR LOS RESULTADOS
const mostrar = (articulo)=> {
    articulo
    resultados += `
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    `
}

//PROCEDIMEINTO CREAR REGISTROS

fetch(url)
    .then(response => response.json())
    .then( data => mostrar(data))
    .catch( error => console.log(error))