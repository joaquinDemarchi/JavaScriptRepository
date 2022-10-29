
// var toques = recepciones + remates + saques + otrosToques;

// var recepciones = rec_b + rec_nr + rec_m + rec_r;
// var remates = rem_r + rem_b + rem_m;
// var saques = saq_b + saq_r + saq_m;
// var otrosToques;

// // var rec_b ;
// // var rec_m ;
// // var rec_nr ;
// // var rec_r ;

// // var rem_b ;
// // var rem_m ;
// // var rem_r ;

// // var saq_b ;
// // var saq_m ;
// // var saq_r ;
//REMATES
//REMATES BUENOS
//AUMENTAR CONTADOR REMATE BUENO

var boton_IRB = document.getElementById("sumarRemBue");
boton_IRB.addEventListener("click", AumRemBue);


function AumRemBue(){

    const input = document.getElementById("rematesBuenos");
    let value = input.value;

    let input2 = document.getElementById("rematesTotales");
    let value2 = input2.value;

    return input.value++, input2.value++ ;
};

//DISMUNUIR CONTADOR REMATE BUENOS

var boton_DRB = document.getElementById("restarRemBue");
boton_DRB.addEventListener("click", DisRemBue);


function DisRemBue(){

    const input = document.getElementById("rematesBuenos");
    let value = input.value;

    let input2 = document.getElementById("rematesTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
};


////////////////////////////////////////////////////


//REMATES MALOS
//AUMENTAR CONTADOR REMATE MALOS

var boton_IRM = document.getElementById("sumarRemMal");
boton_IRM.addEventListener("click", AumRemMal);


function AumRemMal(){

    const input = document.getElementById("rematesMalos");
    let value = input.value;

    let input2 = document.getElementById("rematesTotales");
    let value2 = input2.value;

    return input.value++, input2.value++;
};

//DISMUNUIR CONTADOR REMATE BUENOS

var boton_DRB = document.getElementById("restarRemMal");
boton_DRB.addEventListener("click", DisRemMal);


function DisRemMal(){

    const input = document.getElementById("rematesMalos");
    let value = input.value;

    let input2 = document.getElementById("rematesTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
};

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

//RECEPECIONES
//RECEPCIONES BUENAS
//AUMENTAR CONTADOR DE RECEPCIONES BUENAS

var boton_IRecB = document.getElementById("sumarRecBue");
boton_IRecB.addEventListener("click", AumRecBue);


function AumRecBue(){

    const input = document.getElementById("recepcionesBuenas");
    let value = input.value;

    let input2 = document.getElementById("recepTotales");
    let value2 = input2.value;

    return input.value++, input2.value++;
};

//DISMUNUIR CONTADOR RECEPCIONES BUENAS

var boton_DRecB = document.getElementById("restarRecBue");
boton_DRecB.addEventListener("click", DisRecBue);


function DisRecBue(){

    const input = document.getElementById("recepcionesBuenas");
    let value = input.value;

    let input2 = document.getElementById("recepTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
};


// ////////////////////////////////////////////////////


//RECEPCIONES MALAS
//AUMENTAR CONTADOR RECEPCIONES MALAS

var boton_IRecM = document.getElementById("sumarRecMal");
boton_IRecM.addEventListener("click", AumRecMal);


function AumRecMal(){

    const input = document.getElementById("recepcionesMalas");
    let value = input.value;

    let input2 = document.getElementById("recepTotales");
    let value2 = input2.value;

    return input.value++, input2.value++;
};

//DISMUNUIR CONTADOR RECEPCIONES MALAS

var boton_DRecM = document.getElementById("restarRecMal");
boton_DRecM.addEventListener("click", DisRecMal);


function DisRecMal(){

    const input = document.getElementById("recepcionesMalas");
    let value = input.value;

    let input2 = document.getElementById("recepTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

//SAQUES
//SAQUES BUENOS
//AUMENTAR CONTADOR SAQUES BUENOS

var boton_ISB = document.getElementById("sumarSaqBue");
boton_ISB.addEventListener("click", AumSaqBue);


function AumSaqBue(){

    const input = document.getElementById("saquesBuenos");
    let value = input.value;

    let input2 = document.getElementById("saquesTotales");
    let value2 = input2.value;

    return input.value++, input2.value++;
};

//DISMUNUIR CONTADOR SAQUES BUENOS

var boton_DSB = document.getElementById("restarSaqBue");
boton_DSB.addEventListener("click", DisSaqBue);


function DisSaqBue(){

    const input = document.getElementById("saquesBuenos");
    let value = input.value;

    let input2 = document.getElementById("saquesTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
};


////////////////////////////////////////////////////


//SAQUES MALOS
//AUMENTAR CONTADOR SAQUES MALOS

var boton_ISM = document.getElementById("sumarSaqMal");
boton_ISM.addEventListener("click", AumSaqMal);


function AumSaqMal(){

    const input = document.getElementById("saquesMalos");
    let value = input.value;

    let input2 = document.getElementById("saquesTotales");
    let value2 = input2.value;

    return input.value++, input2.value++;

};

//DISMUNUIR CONTADOR SAQUES BUENOS

var boton_DSB = document.getElementById("restarSaqMal");
boton_DSB.addEventListener("click", DisSaqMal);


function DisSaqMal(){

    const input = document.getElementById("saquesMalos");
    let value = input.value;

    let input2 = document.getElementById("saquesTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
};










//////////////////////////////////////////////////////
/////////////////////////////////////////////////////bin



//IMPRIMIR DATOS

var boton_IMPRIMIR = document.getElementById("imprimir");
boton_IMPRIMIR.addEventListener("click", imp_DT);

//remates

let rem_m = document.getElementById("rematesMalos");
let rem_m_val = rem_m.value;

let rem_b = document.getElementById("rematesBuenos");
let rem_b_val = rem_b.value;

//recepciones 

let rec_m = document.getElementById("recepcionesMalas");
let rec_m_val = rec_m.value;

let rec_b = document.getElementById("recepcionesBuenas");
let rec_b_val = rec_b.value;

//saques 

let saq_m = document.getElementById("saquesMalos");
let saq_m_val = saq_m.value;

let saq_b = document.getElementById("saquesBuenos");
let saq_b_val = saq_b.value;


//FUNCION IMPRESORA

function imp_DT(rem_m_val, rem_b_val,rec_m_val ,rec_b_val, saq_m_val, saq_b_val){

    let tot_rem = Number(rem_m.value) + Number(rem_b.value); 

        let rematesBuenos = Number(rem_b.value);
        let rematesMalos = Number(rem_m.value);

    let tot_rec = Number(rec_m.value) + Number(rec_b.value); 

        let recepcionesBuenas = Number(rec_b.value);
        let recepcionesMalas = Number(rec_m.value);

    let tot_saq = Number(saq_m.value) + Number(saq_b.value); 

        let saquesBuenos = Number(saq_b.value);
        let saquesMalos = Number(saq_m.value);

    const result = document.getElementById("DatosCompletos");

    return result.innerText = "REMATES TOTALES: ======> | " + tot_rem + ' | ' + '\n' + '\b' + '\b' +"Remates buenos: ---- | " + rematesBuenos + ' | ' + '\n' + '\b' + '\b' +"Remates malos: ---- | " + rematesMalos + ' | ' + '\n' + '\n' +" RECEPCIONES TOTALES: ======> | " + tot_rec + ' | ' + '\n'  + '\b' + '\b' +"Recepciones buenas: ---- | " + recepcionesBuenas + ' | ' + '\n' + '\b' + '\b' +"Recepciones malas: ---- | " + recepcionesMalas + ' | ' + '\n' + '\n' + " SAQUES TOTALES: ======> | " + tot_saq + ' | ' + '\n'  + '\b' + '\b' +"Saques buenos: ---- | " + saquesBuenos + ' | ' + '\n' + '\b' + '\b' +"Saques malos: ---- | " + saquesMalos + ' | ' ;
};




//