import { labTestCart , saveLabTestCart , saveLabTestPrice } from "../Lab Test/labTests.js";
import { profilSideBar , profileHTML } from "../Datas/profile-side.js";

document.querySelector('.js-list-items-count')
.innerHTML = `${labTestCart.length} Items`;

console.log(labTestCart);

if (labTestCart.length > 0) {
    console.log(labTestCart);
    makeHtmlForCart();

    

    function makeHtmlForCart () {
        let cartTestItemHtml = ``;
        labTestCart.forEach((test) => {
        
            cartTestItemHtml += `
            <div class="cart-items" data-lab-test-id="${test.id}">
                                <img src="${test.image}" class="carted-item-img" />
                                <div class="test-info">
                                    <div class="test-name-and-delete">
                                        <p>${test.sub.testName}</p>                          
                                        <img src="https://pic.onlinewebfonts.com/thumbnails/icons_558573.svg" data-lab-test-id="${test.id}" class="delete-img js-delete-img" />
                                    </div>
                                    <div class="main-name-of-test">${test.testName}</div>
                                    <div class="test-price"><span>&#x20B9;</span> ${test.sub.price}</div>
                                </div>
                            </div>
            `;
        });

        document.querySelector('.left-cart').innerHTML = cartTestItemHtml; 
        deletingTest();
        updateOrderBill();
        noneTests();        
    }
    
    function deletingTest () {
        document.querySelector('.js-list-items-count')
        .innerHTML = `${labTestCart.length} Items`;

        document.querySelectorAll('.js-delete-img')
        .forEach((link) => {
            link.addEventListener('click' , () => {
                let deleteId = link.dataset.labTestId;
                let deleteCartindex;
                labTestCart.forEach((cart , index) => {
                    if (cart.id === deleteId) {
                        deleteCartindex = index;
                    }
                });
    
                labTestCart.splice(deleteCartindex , 1);
                console.log(labTestCart);
    
                saveLabTestCart();
                makeHtmlForCart();
            });
        });
    }
    
    
    function updateOrderBill () {
        let totalTestPrice = 0;
        labTestCart.forEach((test) => {
            totalTestPrice += test.sub.price;
        });
    
        document.querySelector('.js-no-of-tests p span')
        .innerHTML = labTestCart.length;
        document.querySelector('.js-sum-tests-price')
        .innerHTML = totalTestPrice.toFixed(2);
    
        let taxPrice = totalTestPrice / 20;
        document.querySelector('.js-tax-price')
        .innerHTML = taxPrice.toFixed(2);
    
        document.querySelector('.js-total-price-with-tax')
        .innerHTML = (totalTestPrice + taxPrice).toFixed(2);

        saveLabTestPrice((totalTestPrice + taxPrice).toFixed(2));
    }
} else {
    noneTests();
}

   
function noneTests () {
    if (labTestCart.length === 0) {
        document.querySelector('.js-main-page')
        .innerHTML = `
        <div class="no-test">
                    <img src="https://i.pinimg.com/564x/55/81/80/558180f961f4da7db384c55903ae464c.jpg" />
                    <h1>No Tests are in Cart</h1>
                </div>
        `;
    }
}

profileHTML();
profilSideBar();