// Marcar los errores priemro dentro de los callbacks

function asincrona() {
    setTimeout(() => {
        try{
            let a = 3 + z;
            callback(null, a);
        } catch (err) {
            callback(err, null);
        }
    }, 1000);
}

asincrona(function (err,dato){
    if (err) {
        console.error('hay un error')
        console.error(err)
        return false;
    }

    console.log('Todo salio perfecto mi dato es ', dato);
})