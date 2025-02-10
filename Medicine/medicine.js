import { tablets } from "./tabletsList.js";
import { cart , saveCart } from "../Datas/cart.js";
import { profilSideBar , profileHTML } from "../Datas/profile-side.js";

if (cart) {
    document.querySelector('.cart-quantity-count')
    .innerText = cart.length;
}



let gridCode = '';

tablets.forEach((tablet) => {
    gridCode += `
    <div class="product-card">
                    <div class="product-img-card">
                        <img src="${tablet.productImage}" class="product-img"/>
                    </div>

                    <div class="product-name limit-text-to-2-lines">${tablet.productName}</div>

                    <div class="product-cost">
                        <span>&#x20B9;</span> ${tablet.productPrice}
                    </div>

                    <!--<div class="product-quantity">
                        <select class="get-product-quantity js-get-product-quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>-->

                    <div class="add-product2cart">
                        <button class="add-to-cart-but" id="${tablet.productId}">Add to Cart</button>
                    </div>
                </div>
    `
});

document.querySelector('.store-grid').innerHTML = gridCode;



if (!cart) {
    cart = [];
}

let cartItems = document.querySelectorAll('.add-to-cart-but');

cartItems.forEach((cartItem) => {
    cartItem.addEventListener( 'click' , () => {
        let id = cartItem.id;
        addToCart (id);

        document.querySelector('.cart-quantity-count')
        .innerText = cart.length;
        
        saveCart();

        console.log(cart);
    }); 
});




function addToCart (id) {
    let matchedItem;
    cart.forEach((cartedItem) => {
        if (cartedItem.id === id) {
            matchedItem = cartedItem;
        } 
    });

    if (!matchedItem) {
        tablets.forEach((tablet) => {
            if (tablet.productId === id) {
                cart.push({
                    id: tablet.productId ,
                    cartItemName: tablet.productName ,
                    price: tablet.productPrice ,
                    quantity: 1
                });
            }
        });
    } else {
        matchedItem.quantity++;
    }
}




profileHTML();
profilSideBar();
