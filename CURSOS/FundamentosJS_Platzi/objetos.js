var Jade = {
    raza:"Salchicha",
    color: "Negro fueego",
    sexo: "hembra",
    vacunasPuestas: "ninguna",
    meses: 1,

    vacunacionDelPerro: function(){
        console.log(`Los datos del perro son los siguientes. Dosis colocadas: ${this.vacunasPuestas}. Edad (en meses) del animal: ${this.meses}`);
    }
};

perro //{raza: "Salchicha", color: "Negro fueego", sexo: "hembra", meses: 1}

perro.raza // "salchicha"

perro.vacunacionDelPerro();


