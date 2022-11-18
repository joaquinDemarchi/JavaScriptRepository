

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

//... Funciones helpers Genericos
const inactivarContenedor = (elemento) => elemento.classList.add('inactive');
const activarContenedor = (elemento) => elemento.classList.remove('inactive');
const toogleInactivar = (elemento) => elemento.classList.toggle('inactive');
const containsInactive = (elemento) => elemento.classList.contains('inactive');

//funciones organizar la interaciones

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    // shoppingCartContainer.classList.add('inactive');
    inactivarContenedor(shoppingCartContainer)

  }

  toogleInactivar(desktopMenu)
}

function toggleMobileMenu(){
  const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideMenuClosed) {
    inactivarContenedor(shoppingCartContainer)
  }
  toogleInactivar(mobileMenu)

  closeProductDetailAside()
}

function toggleCarritoAside(){

  const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
  // const isDesktopMenuClosed = desktopMenu.classList.contains('inactive'); 

  if (!isMobileMenuClosed) {
   inactivarContenedor(mobileMenu);
  }
  // } else if (!isDesktopMenuClosed) {
  //   desktopMenu.classList.add('inactive');
  // }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 

  if (!isProductDetailClosed) {
    inactivarContenedor(productDetailContainer)
  } 

  toogleInactivar(shoppingCartContainer)

}
// incluimos el listado de articulos desde JS
//primero convertimos en objetos la info de los art y almacenamso en un array
const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: 'pantalla',
  price: 200,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: 'compu',
  price: 320,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function openProductDetailAside() {
  inactivarContenedor(shoppingCartContainer)
  activarContenedor(productDetailContainer)
}

function closeProductDetailAside() {
  inactivarContenedor(productDetailContainer)
}


//..luego recorremos el array utilizando For of

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */


// es importante encapsular nuestro for en una funcion asi le podemos dar funcionalidades extra
function renderProducts(arr){
  for (product of arr){
    // console.log(product.name); esto nos devolveria todos los nombres de los articulos 
    //ahora por c/ producto ...
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside );
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText =  product.name;

    //usamos append child para insertar etiquetas unas dentro de otras

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);




// const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

// const cardsContainer = document.querySelector('.cards-container');


// menuHamIcon.addEventListener('click', toggleMobileMenu);

// productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


// function toggleMobileMenu() {
//   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

//   if (!isAsideClosed) {
//     shoppingCartContainer.classList.add('inactive'); 
//   }
//   if (!isAsideClosed) {
//     shoppingCartContainer.classList.add('inactive');
//   }
  
//   desktopMenu.classList.toggle('inactive');
// }





// function toggleCarritoAside() {
//   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
//   if (!isMobileMenuClosed) {
//     mobileMenu.classList.add('inactive');
//   }

//   const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
//   if (!isProductDetailClosed) {
//     productDetailContainer.classList.add('inactive'); 
//   }
  
//   shoppingCartContainer.classList.toggle('inactive');
// }

// function openProductDetailAside() {
//   shoppingCartContainer.classList.add('inactive');
//   productDetailContainer.classList.remove('inactive');
// }



// const productList = [];
// productList.push({
//   name: 'Bike',
//   price: 120,
//   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// });
// productList.push({
//   name: 'Pantalla',
//   price: 220,
//   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// });
// productList.push({
//   name: 'Compu',
//   price: 620,
//   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// });

// function renderProducts(arr) {
//   for (product of arr) {
//     const productCard = document.createElement('div');
//     productCard.classList.add('product-card');
  
//     // product= {name, price, image} -> product.image
//     const productImg = document.createElement('img');
//     productImg.setAttribute('src', product.image);
//     productImg.addEventListener('click', openProductDetailAside);
  
//     const productInfo = document.createElement('div');
//     productInfo.classList.add('product-info');
  
//     const productInfoDiv = document.createElement('div');
  
//     const productPrice = document.createElement('p');
//     productPrice.innerText = '$' + product.price;
//     const productName = document.createElement('p');
//     productName.innerText = product.name;
  
//     productInfoDiv.appendChild(productPrice);
//     productInfoDiv.appendChild(productName);
  
//     const productInfoFigure = document.createElement('figure');
//     const productImgCart = document.createElement('img');
//     productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
//     productInfoFigure.appendChild(productImgCart);
  
//     productInfo.appendChild(productInfoDiv);
//     productInfo.appendChild(productInfoFigure);
  
//     productCard.appendChild(productImg);
//     productCard.appendChild(productInfo);
  
//     cardsContainer.appendChild(productCard);
//   }
// }

// renderProducts(productList);
