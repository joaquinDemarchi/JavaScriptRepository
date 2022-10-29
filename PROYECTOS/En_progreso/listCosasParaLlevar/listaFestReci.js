
var cosasLlevar = []
var cosasLlevarText = []

function cosa (nCosa,cuando,quien){
    this.nombreDeCosa = nCosa;
    this.cuandoPrepAvi = cuando;
    this.quienLleva = quien;
}

function cosaText (nCosa,cuando,quien){
    return   '\n' + nCosa + ', se llevara ' + cuando + ' y lo hara '+ quien;
}


function cargarLista(){

    for (i = 0; i < 3; i++){

        var ncosa = prompt("que es");
        var cuando = prompt("cuando lleva");
        var quien = prompt("quien lleva");

        cosasLlevar.push(new cosa(ncosa,cuando,quien))
        cosasLlevarText.push(cosaText(ncosa,cuando,quien))

        // var i = Number(prompt("queres seguir, pone 1, sino pone 4"));

        var p = (prompt("queres seguir cargando elementos?")).toLowerCase();

        if (p === 'si'){
            var i = 1;

        } else {
            var i = 4;
        }
    }
}

var listaSinDetalles = cosasLlevar.map(function(cosas){
    return cosas.nombreDeCosa;
})

function verListaCompleta(){
    console.log(cosasLlevar);
}


function queLlevo(){

    console.log('No entiendo por que te has marchado, pero si quieres seguir interactuando con la lista escribe: " queLlevo()" ')

    for (i = 0; i < 4; i++){

        if (i < 1){
        alert('bienvenidos a la lista del joa')
        }

        var accion = Number(prompt("seleccione el numero que corresponda a la accion que desea realizr... \n 1 - Añadir elementos nuevos a la lista \n 2 - Ver lista completa  \n 3 - Ver lista sin detalles (la veras al salir) \n 0 - Salir"));

        switch(accion){

            case 1 : 
                cargarLista();
                break;
            
            case 2 : 
                // verListaCompleta();
                alert(cosasLlevarText);
                break;
            
            case 3 :
                var listaSinDetalles = (cosasLlevar.map(function(cosas){
                    return '\n' + cosas.nombreDeCosa ;
                }) )+ ' ';
                alert(listaSinDetalles)
                break;

            default :
                alert('Adios :(')
                var i = 4;

        }

    }
}



queLlevo();