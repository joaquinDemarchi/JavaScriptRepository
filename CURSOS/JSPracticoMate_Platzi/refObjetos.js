// Objeto para probar con consola del navegador

function saludoCorrentino(){
   return 'Hola chamigo! Tanto tiempo como pue anda?';
       }

const paises = {
 nombre: 'Aregentina',
 poblacion: 45060069,
 zonas: ['Patagonia','NEA','NOA','Cuyo', 'Amba' ],
 ciudadesGrandes: [
   {
      nombre: 'Buenos Aires',
      territorio_m2: 300000
      },{
      nombre: 'Santa Fe',
      territorio_m2: 290000
   },
 ],
 elemConColoresBandera:[
   ['celeste', ['cielo', 'agua']], ['blanco', ['nube', 'humo']],
   ['amarillo',['sol', 'oro']],
 ],
 DetallesDeProvincias: [
   {
      nombre: 'Cordoba',
      personalidades:[
         {
            nombre: 'Julian Alvarez',
            ocupacion: 'Jugador de futbol',
            logros: [{
               premio:'Campeon Copa Libertadores', 
               alcance: 'Internacional' 
               },{
               premio:'Campeon Torneo Argentino', 
               alcance: 'Nacional' 
               }
            ]
         },{
            nombre: 'Rodrigo Bueno',
            ocupacion: 'Cantante',
            logros: [{
               premio:'Disco de Oro Argentina', 
               alcance: 'Nacional' 
            },{
               premio:'Latin Grammy', 
               alcance: 'Internacionacional' 
               }
            ]
         }
      ]
   },{
      nombre: 'Chaco',
      hasAtraccionesTuristicas: false,
   },{
      nombre: 'Corrientes',
      presentacion: saludoCorrentino(),
   },
],
}

//DISTINTAS FORMAS DE DEVOLVER 


//GENERAL

//--Devuelve el objeto completo
//console.log({paises});

//ZONAS

//--Devuelver arr 'zonas' dentro del objeto paises
   //console.log(paises.zonas);
//--Devuelver 4to elem. de arr 'zonas' dentro del objeto paises
   // console.log(paises.zonas[3]);

// CIUDADES GRNADES

//--Devuelver arr de objs 'ciudadesGrandes' dentro del objeto paises
   //console.log(paises.ciudadesGrandes);
//--Devuelve 1er obj del arr de objs 'ciudadesGrandes' dentro del objeto paises
   //console.log(paises.ciudadesGrandes[0]);
//--Devuelve el valor de la llave 'nombre' del 1er obj del arr de objs 'ciudadesGrandes', dentro del objeto paises
   //console.log(paises.ciudadesGrandes[0].nombre);

//ELEMENTOS AGRUPADOS QUE TIENEN LOS COLORES DE LA BANDERA DEL PAIS

//--Devuelve arr de arr 'elemConColoresBandera' dentro del objeto paises
   // console.log(paises.elemConColoresBandera)
//--Devuelve 3er arr, del arr de arr 'elemConColoresBandera', dentro del objeto paises
   // console.log(paises.elemConColoresBandera[2])
//--Devuelve el 2do elem del 3er arr (que es un arr), del arr de arr 'elemConColoresBandera', dentro del objeto paises.
   // console.log(paises.elemConColoresBandera[2][1])
//--Devuelve el 2do elem del arr anterior.
   // console.log(paises.elemConColoresBandera[2][1][1])

// DETALLES DE PROVINCIAS

//--Devuelve arr de obj DetallesDeProvincias
   // console.log(paises.DetallesDeProvincias);
//--Devuelve 1er obj, dentro de arr de obj DetallesDeProvincias
   // console.log(paises.DetallesDeProvincias[0]);
//--Devuelve el valor de la llave 'nombre' del 1er obj del arr de objs 'DetallesDeProvincias', dentro del objeto paises
   // console.log(paises.DetallesDeProvincias[0].nombre);
//--Devuelve el 1er elem del arr "personalidades", que esta dentro del arr 'DetallesDeProvincias', dentro del objeto paises
   //console.log(paises.DetallesDeProvincias[0].personalidades[0]);
//--Devuelve el valor de la llave 'nombre' del 1er obj del arr de objs 'personalidades', que esta dentro del arr 'DetallesDeProvincias', dentro del objeto paises
   //console.log(paises.DetallesDeProvincias[0].personalidades[0].nombre);
//--Devuelve el arr de obj 'logros' que esta dentro del arr de obj 'Personalidades', que esta dentro del arr de objs 'DetallesDeProvincias', que esta dentro del objeto paises
   //console.log(paises.DetallesDeProvincias[0].personalidades[0].logros);
//--Devuelve el 1er objeto del arr de obj 'logros' que esta dentro del arr de obj 'Personalidades', que esta dentro del arr de objs 'DetallesDeProvincias', que esta dentro del objeto paises
   //console.log(paises.DetallesDeProvincias[0].personalidades[0].logros[0]);
//--Devuelve el valor de la llave 'premio' del 1er objeto del arr de obj 'logros' que esta dentro del arr de obj 'Personalidades', que esta dentro del arr de objs 'DetallesDeProvincias', que esta dentro del objeto paises
   // console.log(paises.DetallesDeProvincias[0].personalidades[0].logros[0].premio);

//--Devuelve 2do obj, dentro de arr de obj DetallesDeProvincias
   // console.log(paises.DetallesDeProvincias[1]);
//--Devuelve el valor de la llave 'nombre' del 2do obj, dentro de arr de obj DetallesDeProvincias
   // console.log(paises.DetallesDeProvincias[1].nombre);
//--Devuelve el valor de la llave 'hasAtraccionesTuristicas' del 2do obj, dentro de arr de obj DetallesDeProvincias
   // console.log(paises.DetallesDeProvincias[1].hasAtraccionesTuristicas);

//Devolver el 3er obj del arr de obj DetallesDeProvincias que esta dentro del objeto paises
   // console.log(paises.DetallesDeProvincias[2]);
//Devolver el valor(booleano) de la llave 'nombre' del 3er obj del arr de obj DetallesDeProvincias que esta dentro del objeto paises
   // console.log(paises.DetallesDeProvincias[2].nombre);
//Devolver el valor(funcion) de la llave 'presentacion' del 3er obj del arr de obj DetallesDeProvincias que esta dentro del objeto paises
   // console.log(paises.DetallesDeProvincias[2].presentacion);