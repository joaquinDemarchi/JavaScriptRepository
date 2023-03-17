

const funcionAsincrona = () => {
   return new Promise((resolve, reject) => {
   (true)
      ? setTimeout(() => {
         resolve('Mensaje de la promesa');
      }, 3000)
      : reject (new Error ('Error!'));
   })
   
}

const otraFuncionAsincrona = async () => {
   const algo = await funcionAsincrona();

   console.log(algo);

   console.log('Mensaje del Async/await');
}


console.log('ANTES');

otraFuncionAsincrona()

console.log('DESPUES');
