let criptos = [];
//constructor
function Cripto (nombre,token, edad){
    
    this.Nombre = nombre,
    this.Token =  token,
    this.Edad = edad,
    this.intro = ()=>{
        alert(`El proyecto ${this.nombre} con token ${this.token}, tiene una capitalizacion de ${this.edad} `)
    }
}



// var solana = new Cripto('Solana', 'SOL', 5)
// var cardano = new Cripto('Cardano', 'ADA', 2)

// console.log(solana);
// console.log(cardano);

let iniciador = prompt('Desea agregar alguna cripto?');



while (iniciador == 'si'){

    let nombreCripto = prompt('Ingrese nombre de la cripto');
    let tokenCripto = prompt('Ingrese token de la cripto');
    let edadCripto = prompt('Ingrese edad de la cripto');

    if (iniciador == 'si'){

        criptos.push(new Cripto (nombreCripto,tokenCripto,edadCripto))

        console.table(criptos);

        iniciador = prompt('Desea agregar otra cripto?');

    } else if (iniciador == 'no'){
        alert('Gracias por la informacion');
    }
}

