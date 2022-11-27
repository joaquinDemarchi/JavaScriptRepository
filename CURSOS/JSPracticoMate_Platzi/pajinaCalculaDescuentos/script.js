

const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

//en el caso que usemos una API para traer los cupones. Es mejor guardar 
const arrayUObjecto = undefined; // ['cupones': descuento] {}?


//obejto con cupones [forma 2]
// const couponsObj = {
//   'cupon1': 30,
//   'cupon2': 25,
//   'cupon3': 15,
// };

//array de objetos [forma 3]
const couponlist = [];

//forma de llenar arrya de objetos[forma 3]
//mejro forma de hacerlo aunque un poco mas larga, podemso agragarle mas caracteristicas al cupon 
couponlist.push({
  name: 'cupon1',
  discount: 30,
});
couponlist.push({
  name: 'cupon2',
  discount: 25,
});
couponlist.push({
  name: 'cupon3',
  discount: 15,
});

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
      pResult.innerText = 'CHANCLA por favor llena el formulario';
      return;
  }
  
  let discount;

  
//esta funcion ira en el filter y verificara la conicidencia de la llave name de cada obajeto con lo que puso el usuario
  function funcionDelMetodo(couponElement){
    return couponElement.name == coupon;
  }
  //const isCouponInArray = couponlist.filter(funcionDelMetodo) //Devuelve un array con objetos  [0 : {name: 'cupon1', discount: 30;},[1 : {name: 'cupon2', discount: 30;}[forma 3.1]

  const isCouponInArray = couponlist.find(funcionDelMetodo) //esta sid evuelve un objeto  [0 : {name: 'cupon1', discount: 30;},[1 : {name: 'cupon2', discount: 30;}[froma3.2]

  // este condicional preg si alguno de los copones de nuestro objeto es igual al que el intrucido por el usuario.Lo que ponen los usuarios seria o no una llave dle objeto.[forma 2]
  // if(couponsObj[coupon]){
  //   discount = couponsObj[coupon]
  // }else{
  //   pResult.innerText = 'El cupón no es válido';
  //   return;
  // }

//Este condicinal a diferecia de la forma 2 solo cita la funcion filter guardada en la variable y verifica que haya aunque sea una hya una coincidencia[Forma 3.1]
// if(isCouponInArray.length > 0)[forma 3.2]
if(isCouponInArray){ //lo mismo pero con la funcion find en vez de filter[forma 3.2]
    discount = isCouponInArray.discount
  }else{
    pResult.innerText = 'El cupón no es válido';
    return;
  }


  //[forma 1]
  // switch (coupon) {
  //   case 'JuanDC_es_Batman':
  //     discount = 30;
  //     break;
  //   case 'no_le_digas_a_nadie':
  //     discount = 25;
  //     break;
  //   default:
  //     pResult.innerText = 'El cupón no es válido';
  //     return;
  // }
  
  // if (coupon == 'JuanDC_es_Batman') {
  //   discount = 30;
  // } else if (coupon == 'no_le_digas_a_nadie') {
  //   discount = 25;
  // } else {
  // pResult.innerText = 'El cupón no es válido';
  // return;
  // }
  
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}
