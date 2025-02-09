import { cart , saveCart , deleteCardFromCart , saveTotalPrice } from "../Datas/cart.js";
import { profilSideBar , profileHTML } from "../Datas/profile-side.js";


console.log(cart);


changeItemCardItems();

function noItems () {
    if (cart.length === 0) {
        document.querySelector('.page')
        .innerHTML = `
        <div class="no-item">
                    <img src="https://i.pinimg.com/564x/0e/8f/d7/0e8fd7b2838a8d89da6d8ed1c6ace9d6.jpg" />
                    <p class="no-item-para"> 
                        <span> NO</span>
                        Item are in the cart
                </div>
        `;
        document.querySelector('.headding h1 span')
        .innerHTML = `${cart.length} items`;
    }
}

noItems();

// not used

// function deleteItemFromCart (id) {
//     cart.forEach( (item , index) => {
//         if (item.id === id) {
//             cart.splice(index , 1);
//         }
//     });
//     console.log(cart);
//     saveCart();
// }


function changeItemCardItems () {
    let cartItemCard = '';
    let deliveryDateAfterXDays = (dayjs().add(Math.floor(Math.random() * 7) + 1 , 'days')).format('dddd, MMMM D');

    cart.forEach((carteditem) => {
        console.log(carteditem);
        cartItemCard += `
        <div class="item-card js-item-card-${carteditem.id}" >
        <h1 class="delivery-date">Delivery Date : ${deliveryDateAfterXDays}</h1>
        <div class="cart-item-card">
            <div class="img-card">
                <img src="#" />
            </div>
            <div class="info-card">
                <h1>${carteditem.cartItemName}</h1>
                <p class="price">&#x20B9; ${(carteditem.price).toFixed(2)}</p>
                <div class="upd-del-opts js-upd-del-opts-${carteditem.id}">
                    <div class="quantity js-item-quantity">Quantity: ${carteditem.quantity}</div>
                    <div class="update js-update" id="${carteditem.id}">Update</div>
                    <div class="delete js-delete" data-product-id="${carteditem.id}">Delete</div>
                </div>
            </div>
        </div>
    </div>
        `;
    });

    
    document.querySelector('.cart-items').innerHTML = cartItemCard;

    orderSummeryChanges();

    document.querySelectorAll('.js-update')
    .forEach((updateLink) => {
        updateLink.addEventListener('click' , () => {
            let id = updateLink.id;
            console.log(id)

            document.querySelector(`.js-upd-del-opts-${id}`)
            .innerHTML = 
            `

                                        <div class="update-quantity-count">
                                            <button class="decrement-but js-decrement-but-${id}">-</button>
                                            <input type="number" class="js-input-item-quantity-${id}" pattern="[1-99]" />
                                            <button class="increment-but js-increment-but-${id}">+</button>
                                        </div>
                                        <div class="save-updated-quantity-count">
                                            <button class="js-save-updated-count-but-${id}">Save</button>
                                        </div>

            `;

            let matchedItem;
            cart.forEach((item) => {
                if (item.id === id) {
                    matchedItem = item;
                }
            });

            console.log(matchedItem.quantity);

            document.querySelector(`.js-input-item-quantity-${id}`)
            .value = matchedItem.quantity;    
            
            document.querySelector(`.js-increment-but-${id}`)
            .addEventListener('click' , () => {
                matchedItem.quantity++;
                document.querySelector(`.js-input-item-quantity-${id}`)
                .value = matchedItem.quantity; 

                console.log(cart);

                saveCart();
            });

            document.querySelector(`.js-decrement-but-${id}`)
            .addEventListener('click' , () => {
                if (matchedItem.quantity > 1) {
                    matchedItem.quantity--;
                    document.querySelector(`.js-input-item-quantity-${id}`)
                    .value = matchedItem.quantity; 
        
                    console.log(cart);
        
                    saveCart();
                }
            });

            document.querySelector(`.js-save-updated-count-but-${id}`)
            .addEventListener('click' , () => {
                matchedItem.quantity = 0 +  parseInt(document.querySelector(`.js-input-item-quantity-${id}`).value);
                if (matchedItem.quantity == 0) {
                    deleteCardFromCart (id);
                } else if (matchedItem.quantity >= 20) {
                    console.log("You can only take atmost 20 units")
                    matchedItem.quantity = 20;
                }
                saveCart();
                changeItemCardItems();

            });

        });
    });

    let deletingItem = document.querySelectorAll('.js-delete');
    deletingItem.forEach((deleteItem) => {

        deleteItem.addEventListener('click' , () => {

            let productId = deleteItem.dataset.productId;
            console.log(productId);

            deleteCardFromCart (productId);

            document.querySelector(`.js-item-card-${productId}`).remove();

            orderSummeryChanges();

            noItems();
        });

    });

}









function orderSummeryChanges () {


    document.querySelector('.headding h1 span')
    .innerHTML = `${cart.length} items`;

    document.querySelector('.js-no-of-items')
    .innerHTML = `Items(${cart.length}):`;

    let price = 0;
    cart.forEach((item) => {
        price += item.price * item.quantity;
    });

    document.querySelector('.js-ord-price')
    .innerHTML = `&#x20B9; ${(price).toFixed(2)}`;

    document.querySelector('.js-ord-sum-border')
    .innerHTML = `&#x20B9; ${(price / 20).toFixed(2)}`;

    let beforeTaxPrice = (price) + (price / 20);
    document.querySelector('.js-before-tax-price')
    .innerHTML = `&#x20B9; ${beforeTaxPrice.toFixed(2)}`;

    let taxPrice = (((price) + (price / 20)) / 100) * 8 ;
    document.querySelector('.js-tax-price')
    .innerHTML = `&#x20B9; ${taxPrice.toFixed(2)}`;

    document.querySelector('.js-total-price')
    .innerHTML = `&#x20B9; ${(taxPrice + beforeTaxPrice).toFixed(2)}`;

    saveTotalPrice((taxPrice + beforeTaxPrice));
}



profileHTML();
profilSideBar();