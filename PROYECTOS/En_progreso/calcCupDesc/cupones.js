var precio = 100;

var cupones = [
    'El ahorrador',
    'Sr. Raton',
    'El adicto de ofertas'
]

function calcDescCup(precio,cupon){
    if (cupon == !cupones.includes){
        return 'El cupon ingresado no es valido';
    } else if(cupon == cupones[0]){
        const dto = 15;
        let precFinal = (precio * (100-dto)/100);
        return `El precio con el cupon de descuento "${cupones[0]}" del %${dto}, es de $${precFinal}`;
    } else if(cupon == cupones[1]){
        const dto = 20;
        let precFinal = (precio * (100-dto)/100);
        return `El precio con el cupon de descuento "${cupones[1]}" del %${dto}, es de $${precFinal}`;
    } else if(cupon == cupones[2]){
        const dto = 30;
        let precFinal = (precio * (100-dto)/100);
        return `El precio con el cupon de descuento "${cupones[2]}" del %${dto}, es de $${precFinal}`;
    }
}

var cupon1 = 'cupon falso';
var cupon2 = 'El ahorrador';

// console.log(calcDescCup(precio,cupon2));


//html

function CalcularDescuento(){

    const precio = document.getElementById("InputPrice");
    const precioValue = precio.value;

    const cupon = document.getElementById("InputCupon");
    const cuponValue = cupon.value;

    let PrecioCuponDesc = calcDescCup(precioValue, cuponValue);

    let resultPrice = document.getElementById("ResultPrice");

    return resultPrice.innerText = PrecioCuponDesc;
}