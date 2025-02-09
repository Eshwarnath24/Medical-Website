import { userDatas , logedUserIndex } from "./users.js";
let cartID = userDatas[logedUserIndex].cartItemsId;

export let cart = JSON.parse(localStorage.getItem(`${cartID}`));

if (!cart) {
    cart = []
}



export function saveCart () {
    console.log(cart);
    localStorage.setItem(`${cartID}` , JSON.stringify(cart));
}

// these 2 funtion are not required

// export function updateItemsCount () {
//     let totalItemsCount = 0;
//     cart.forEach((cartItem) => {
//         totalItemsCount += cartItem.quantity;
//     });

//     return totalItemsCount;
// }

// export function cartLength () {
//     document.querySelector('.cart-quantity-count')
//     .innerText = cart.length;

//     saveCart();
// } 


export function deleteCardFromCart (productId) {
    let newCart = [];

    cart.forEach ((cartItem) => {
        if (cartItem.id !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    console.log('saving');


    saveCart ();
}


export let totalPriceCart = localStorage.getItem('totalPrice');

export function saveTotalPrice (price) {
    localStorage.setItem('totalPrice' , price);
}