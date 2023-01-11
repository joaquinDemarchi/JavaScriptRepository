
//prueba de que estamos llamando a archivo salarios y por ende a su arr (con el mismo nombre)

console.log(salarios);

//CLASE 23: CALCULAR AL MEDIANA EN LOS SALARIOS DE CADA PERSONA.

//PRIMERO buscamos a la persona

//FORMA 1
// const personaEnBusqueda = 'Juanita' //respetar mayusculas

// salarios.find((persona) => {
//    return persona.name == personaEnBusqueda
// })
//recordemos que el find nos devuelve un objeto 

//FORMA 2 (mas corta)

function encontrarPersona(personaEnBusqueda){
   return salarios.find(persona => persona.name == personaEnBusqueda);
}

// SEGUNDO calculamos la mediana de su salario

function medianaPorPersona(nombrePersona){
   //primero traemos todo la llave trabajo del objeto de la persona selccionada
   const trabajos = encontrarPersona(nombrePersona).trabajos;
   //verificamos
   console.log(trabajos);
   //y ahora traemos los salarios
   //FORMA 1
   const salariosDeLaPers = trabajos.map(elememto => {return elememto.salario});

   console.log(salariosDeLaPers);

   // FORMA 2
   // var salariosJuntos = [];
   // trabajos.forEach(element => { salariosJuntos.push(element.salario); });
   // console.log(salariosJuntos);

   //por ultimo calculamos la mediana
   const medianaSalarios = PlatziMath.calcularMediana(salariosDeLaPers);

   return medianaSalarios;
   
}

//CLASE 24: CALCULAR UNA PROYECCION DEL AUMENTO DEL SALARIO DE CADA PERSONA EN BASE A LA MEDIANA DE LAS VARIACIONES SALARIALES INTERANUALES DE LA MISMA.

function proyeccionPorPersona(nombrePersona){
   //guardamos el objeto de la llave trabajo del array salrio
   const trabajos=encontrarPersona(nombrePersona).trabajos;
   //creamos el array donde guardaremos los crec interanueles y los vamos cargando
   let porcentajesCrecimiento=[];
   
   for(let i=1;i<trabajos.length;i++){
      const salarioActual=trabajos[i].salario;
      const salarioPasado=trabajos[i-1].salario;
      const crecimiento=salarioActual-salarioPasado;const porcentajeCrecimiento=crecimiento/salarioPasado;
      
      porcentajesCrecimiento.push(porcentajeCrecimiento)
   }
//y ahora calgulamos la mediana
const medianaPrctjCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
//por ultimo calculamos el salario final
const ultimoSalario = trabajos[trabajos.length-1].salario;
const aumento = ultimoSalario * medianaPrctjCrecimiento;
const nuevoSalario = ultimoSalario + aumento;


return nuevoSalario;
}

//CLASE 25: EVOLOCION DEL SALARIO POR EMPRESA.

//En estos casos es muy recomendable plantear el resultado final en codigo, antes de pensar como lograrlo.

// Análisis empresarial
/* {
  Industrias Mokepon: {
    2018: [salario]
  }
  Industrias Mokepon: {
    2018: [salario, salarios, salrios]
    2019: 
    2025: 
    2026: 
  },
  Industrias Mokepon: {},
  Industrias Mokepon: {},
  Industrias Mokepon: {},
} */

//creamos el objeto
const empresas = {};

//lo llenamos 
//en cada elem del arr de salarios se realizara un for que busque ...
for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    //PRIMERO si la empresa no existe..
    if (!empresas[trabajo.empresa]) {
      //si no existe la crea
      empresas[trabajo.empresa] = {};
    }// si ya existe no hace nada
    //DESPUES verificamos si existe o no dentro de nuestro arr el año trabajado
    if (!empresas[trabajo.empresa][trabajo.year]) {
      //si no existe lo agregamos y especif. que sera un array, este contendra los montos de los salarios.
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    //y por ultimo agregamos el monto del salario.
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }

  //despues de todo esto pasamos a la proxima persona o elemento del arreglo salarios
}

console.log({empresas});

// CLASE 26: calculamos la medianda de salarios de una empresa

//con esta funcion calculamos la medianda de salarios de un año determinado en una empresa.
function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn('La empresa no existe');
  } else if (!empresas[nombre][year]) {
    console.warn('La empresa no dio salarios ese año');
  } else {
    return PlatziMath.calcularMediana(empresas[nombre][year]);
  }
}


// CLASE 27: calcular proyeccion de salarios por empresas


function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn('La empresa no existe');
  } else {
    const empresaYears = Object.keys(empresas[nombre]);
    console.log(empresaYears);
    const listaMedianaYears = empresaYears.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });
    console.log(listaMedianaYears);
    
    let porcentajesCrecimiento = [];
  
    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevoMediana = ultimaMediana + aumento;

    return nuevoMediana;
  }
}

// CLASE 28: calcular mediana del top 10%

function medianaGeneral(){
  const listaMedianas = salarios.map( persona => medianaPorPersona(persona.name));
  const mediana = PlatziMath.calcularMediana(listaMedianas);return mediana;
}

function medianaTop10() {
  const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
  const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

  const cantidad = listaMedianas.length/10;
  const limite = listaMedianas.length-cantidad;
  
  const top10 = medianasOrdenadas.slice (limite,medianasOrdenadas.length); 
  const medianaTop10 = PlatziMath.calcularMediana(top10);
  
  
  return medianaTop10;
}

