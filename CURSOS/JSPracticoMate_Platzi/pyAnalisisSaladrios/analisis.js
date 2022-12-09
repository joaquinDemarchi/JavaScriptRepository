
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

//FORMA 2 (amas corta)

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

//primero usamos map para traer 

//luego un map para hacer array de la varaciones interanuales

//luego la funcion calcularMediana y listo

//PRIMERO: Creamos funcion con un array de las variaciones dentro. 

//empezamos for en 1 para evitar el gran salto de salarios.

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