

//REMATES
/*                REMATES BUENOS                */
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


/*                REMATES REGULARES             */
//AUMENTAR CONTADOR REMATE REGULARES

var boton_IRR = document.getElementById("sumarRemReg");
boton_IRR.addEventListener("click", AumRemReg);


function AumRemReg(){

    const input = document.getElementById("rematesRegulares");
    let value = input.value;

    let input2 = document.getElementById("rematesTotales");
    let value2 = input2.value;

    return input.value++, input2.value++ ;
};

//DISMUNUIR CONTADOR REMATE REGULARES

var boton_DRR = document.getElementById("restarRemReg");
boton_DRR.addEventListener("click", DisRemReg);


function DisRemReg(){

    const input = document.getElementById("rematesRegulares");
    let value = input.value;

    let input2 = document.getElementById("rematesTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
};


////////////////////////////////////////////////////


/*                REMATES MALOS                 */
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
/*             RECEPCIONES BUENAS           */
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


/*             RECEPCIONES REGULARES           */
//AUMENTAR CONTADOR DE RECEPCIONES REGULARES

var boton_IRecR = document.getElementById("sumarRecReg");
boton_IRecR.addEventListener("click", AumRecReg);


function AumRecReg(){

    const input = document.getElementById("recepcionesRegulares");
    let value = input.value;

    let input2 = document.getElementById("recepTotales");
    let value2 = input2.value;

    return input.value++, input2.value++;
};

//DISMUNUIR CONTADOR RECEPCIONES REGULARES

var boton_DRecR = document.getElementById("restarRecReg");
boton_DRecR.addEventListener("click", DisRecReg);


function DisRecReg(){

    const input = document.getElementById("recepcionesRegulares");
    let value = input.value;

    let input2 = document.getElementById("recepTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
};


// ////////////////////////////////////////////////////


/*             RECEPCIONES MALAS           */
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
/*               SAQUES BUENOS              */
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


/*             SAQUES REGULARES           */
//AUMENTAR CONTADOR SAQUES REGULARES

var boton_ISR = document.getElementById("sumarSaqReg");
boton_ISR.addEventListener("click", AumSaqReg);


function AumSaqReg(){

    const input = document.getElementById("saquesRegulares");
    let value = input.value;

    let input2 = document.getElementById("saquesTotales");
    let value2 = input2.value;

    return input.value++, input2.value++;
};

//DISMUNUIR CONTADOR SAQUES REGULARES

var boton_DSB = document.getElementById("restarSaqReg");
boton_DSB.addEventListener("click", DisSaqReg);


function DisSaqReg(){

    const input = document.getElementById("saquesRegulares");
    let value = input.value;

    let input2 = document.getElementById("saquesTotales");
    let value2 = input2.value;

    if (value != 0  && value2 != 0){
        return input.value--, input2.value--;
    }
};


////////////////////////////////////////////////////

/*              SAQUES MALOS                */
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

//DISMUNUIR CONTADOR SAQUES MALOS

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
const resulta = document.querySelector('.resultados')
var boton_IMPRIMIR = document.getElementById("imprimir");
boton_IMPRIMIR.addEventListener("click", imp_def);

//remates

//malos
var rem_m = document.getElementById("rematesMalos");
let rem_m_val = rem_m.value;
//regulares
var rem_r = document.getElementById("rematesRegulares");
let rem_r_val = rem_r.value;
//buenos
let rem_b = document.getElementById("rematesBuenos");
let rem_b_val = rem_b.value;

//recepciones 

//malas
let rec_m = document.getElementById("recepcionesMalas");
let rec_m_val = rec_m.value;
//regulares
let rec_r = document.getElementById("recepcionesRegulares");
let rec_r_val = rec_r.value;
//buenas
let rec_b = document.getElementById("recepcionesBuenas");
let rec_b_val = rec_b.value;

//saques 

//Malos
let saq_m = document.getElementById("saquesMalos");
let saq_m_val = saq_m.value;
//Regulars
let saq_r = document.getElementById("saquesRegulares");
let saq_r_val = saq_r.value;
//buenos
let saq_b = document.getElementById("saquesBuenos");
let saq_b_val = saq_b.value;


// FORMA BUENA DE IMPRIMIR(NO FUNCIONA AUN)

// function impRemates(rem_m_val, rem_b_val){
//     // Valores
//     var tot_rem = Number(rem_m.value) + Number(rem_b.value); 

//     var rematesBuenos = Number(rem_b.value);
//     var rematesMalos =  Number(rem_m.value);

//     // Resultados
//     const result = document.getElementById("remTOT");
//     const result2 = document.getElementById("ResultRemates");
    
// }
// function impRecepciones(){}
// function impSaques(){}

// function impDT(){}

// FORMA MALA DE IMPRIMIR (FUNCIONA)

//FUNCION IMPRESORA INTEGRADOR (ACTULIZAR)

// function imp_DT(rem_m_val, rem_r_val, rem_b_val,rec_m_val, rec_r_val, rec_b_val, saq_m_val, saq_r_val, saq_b_val){

//         let rematesBuenos = Number(rem_b.value);
//         let rematesRegulares =  Number(rem_r.value);
//         let rematesMalos =  Number(rem_m.value);
    
//         let tot_rem = rematesMalos + rematesBuenos + rematesRegulares; 

//     let tot_rec = Number(rec_m.value) + Number(rec_b.value); 

//         let recepcionesBuenas = Number(rec_b.value);
//         let recepcionesMalas = Number(rec_m.value);

//     let tot_saq = Number(saq_m.value) + Number(saq_b.value); 

//         let saquesBuenos = Number(saq_b.value);
//         let saquesMalos = Number(saq_m.value);

//     const result = document.getElementById("DatosCompletos");

//     return result.innerText = "REMATES TOTALES: ======> | " + tot_rem + ' | ' + '\n' + '\b' + '\b' +"Remates buenos: ---- | " + rematesBuenos + ' | ' + '\n' + '\b' + '\b' +"Remates malos: ---- | " + rematesMalos + ' | ' + '\n' + '\n' +" RECEPCIONES TOTALES: ======> | " + tot_rec + ' | ' + '\n'  + '\b' + '\b' +"Recepciones buenas: ---- | " + recepcionesBuenas + ' | ' + '\n' + '\b' + '\b' +"Recepciones malas: ---- | " + recepcionesMalas + ' | ' + '\n' + '\n' + " SAQUES TOTALES: ======> | " + tot_saq + ' | ' + '\n'  + '\b' + '\b' +"Saques buenos: ---- | " + saquesBuenos + ' | ' + '\n' + '\b' + '\b' +"Saques malos: ---- | " + saquesMalos + ' | ' ;
// };



//ALTERNATIVA 1  A FUNCION INTEGRADORA
// function imp_DT(rem_m_val, rem_r_val, rem_b_val,rec_m_val, rec_r_val, rec_b_val, saq_m_val, saq_r_val, saq_b_val){
//     //remates
// let rematesBuenos = Number(rem_b.value);
// let rematesRegulares = Number(rem_r.value);
// let rematesMalos =  Number(rem_m.value);

// let tot_rem = rematesMalos + rematesBuenos + rematesRegulares; 

//     //recepciones
// let recepcionesBuenas = Number(rec_b.value);
// let recepcionesRegulares = Number(rec_r.value);
// let recepcionesMalas = Number(rec_m.value);

// let tot_rec = recepcionesBuenas + recepcionesRegulares + recepcionesMalas; 

//     //saques
// let saquesBuenos = Number(saq_b.value);
// let saquesRegulares = Number(saq_r.value);
// let saquesMalos = Number(saq_m.value);

//ALTERNATIVA 2  A FUNCION INTEGRADORA (FUNCIONA!!, COMPLETAR)

function rem_tot(rem_m_val, rem_r_val, rem_b_val){
    let rematesBuenos = Number(rem_b.value);
    let rematesRegulares = Number(rem_r.value);
    let rematesMalos =  Number(rem_m.value);

    let tot_rem = rematesMalos + rematesBuenos + rematesRegulares; 

    const result = document.getElementById("r-tot");

    return result.innerText = "los remates totales son: " + tot_rem; 
}; 




function imp_def(){

    resulta.classList.toggle('inactive');

    rem_tot()
}; 