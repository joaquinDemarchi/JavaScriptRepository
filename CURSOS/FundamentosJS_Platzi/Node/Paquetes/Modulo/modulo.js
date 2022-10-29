//1ERA PARTE

function saludar(){
    console.log('hola mundo')
}

function despedir(){
    console.log('adios mundo')
}

// module.exports = saludar;

// module.exports = despedir;

//2DA PARTE

module.exports = {
    saludar,
    segSaludo: 'Hola soy el segundo saludo'
}