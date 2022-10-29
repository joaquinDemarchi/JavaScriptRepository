
function funcionHola(){
    return 'HOLA'
};

const funAsincrona = async () => {
    const hola = await funcionHola(); 
    console.log(hola);
}

// funcionHola();

funAsincrona()