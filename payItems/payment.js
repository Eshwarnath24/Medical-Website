import { totalPriceCart } from "../Datas/cart.js";
import { LabTestTotalPrice } from "../Lab Test/labTests.js";


console.log(totalPriceCart);
setATMCard();

changeTimeAndLogo();

setInterval(() => {
    changeTimeAndLogo();
}, 10000);




let urlParams = new URLSearchParams(window.location.search);
let webName = urlParams.get('details');
console.log(webName.split(','));

let arrWebName = webName.split(',');

if (arrWebName[0] == 'cart') {
    document.querySelector('.js-fill-price')
    .innerHTML = `&#x20B9; ${totalPriceCart}`;
} else {
    document.querySelector('.js-fill-price')
    .innerHTML = `&#x20B9; ${LabTestTotalPrice}`;
}



document.querySelector('.js-back-to-cart-hyperlink')
.addEventListener('click' , (event) => {
    event.preventDefault();
    window.location.href = `../${arrWebName[0]}/${arrWebName[1]}`;
});







function changeTimeAndLogo () {
    let  currentTime = dayjs().format('HHmm');

    document.querySelector('.js-time-card1')
    .innerHTML = currentTime[0];
    document.querySelector('.js-time-card2')
    .innerHTML = currentTime[1];
    document.querySelector('.js-time-card3')
    .innerHTML = currentTime[2];
    document.querySelector('.js-time-card4')
    .innerHTML = currentTime[3];


    let cardNum = document.querySelector('.js-input-card-num1').value
    + document.querySelector('.js-input-card-num2').value
    + document.querySelector('.js-input-card-num3').value
    + document.querySelector('.js-input-card-num4').value ;

    if (cardNum.length == 16) {
        document.querySelector('.js-loding-gif')
        .src = "https://i.pinimg.com/564x/41/78/aa/4178aa104247a2a94ab5beb75de8c501.jpg";
    } else {
        document.querySelector('.js-loding-gif')
        .src = "https://i.pinimg.com/originals/4e/8c/91/4e8c9197c64747175890b4f8cd740bb7.gif";
    }
}


document.querySelector('.js-pay-now-but')
.addEventListener('click' , (event) => {
    document.querySelector('.toogle-say-container')
    .classList.toggle('active');

    setTimeout(() => {
        document.querySelector('.toogle-say-container')
        .classList.toggle('active');
    }, 1000);

    event.preventDefault();
    window.location.href = `../payment OTP/otp.html?details=${webName}`;
});


document.querySelector('.js-edit-img-name')
.addEventListener('click' , () => {
    let say = document.querySelector('.js-input-card-num1'); 
    if (say.disabled === true) {
        document.querySelector('.js-edit-img-name').innerHTML = `
        <img src="https://pic.onlinewebfonts.com/thumbnails/icons_564931.svg" alt="">
            Save
        `;
        document.querySelector('.js-input-card-num1').disabled = false;
        document.querySelector('.js-input-card-num2').disabled = false;
        document.querySelector('.js-input-card-num3').disabled = false;
        document.querySelector('.js-input-card-num4').disabled = false;
        document.querySelector('.js-input-cvv-num').disabled = false;
        document.querySelector('.js-input-data-date').disabled = false;
        document.querySelector('.js-input-data-month').disabled = false;
        document.querySelector('.js-input-card-user-name').disabled = false; 

    } else {
        document.querySelector('.js-edit-img-name').innerHTML = `
        <img src="https://pic.onlinewebfonts.com/thumbnails/icons_564931.svg" alt="">
            Edit
        `;
        document.querySelector('.js-input-card-num1').disabled = true;
        document.querySelector('.js-input-card-num2').disabled = true;
        document.querySelector('.js-input-card-num3').disabled = true;
        document.querySelector('.js-input-card-num4').disabled = true;
        document.querySelector('.js-input-cvv-num').disabled = true;
        document.querySelector('.js-input-data-date').disabled = true;
        document.querySelector('.js-input-data-month').disabled = true;
        document.querySelector('.js-input-card-user-name').disabled = true; 
        setATMCard(); 
        
    }
});

function setATMCard () {
    document.querySelector('.js-card-date').innerHTML = document.querySelector('.js-input-data-date').value;
    document.querySelector('.js-card-month').innerHTML = document.querySelector('.js-input-data-month').value;

    document.querySelector('.js-atm-card-last-numbers').innerHTML = document.querySelector('.js-input-card-num4').value;
    document.querySelector('.js-atm-card-user-name').innerHTML = document.querySelector('.js-input-card-user-name').value;

    document.querySelector('.js-order-number').innerHTML = getOrderNumber();

}

function getOrderNumber () {
    let string = 'a0bc0123def1456ghijk23lmnop78945qrstu1v6789xyz';
    let orderNumber = '';
    for (let i = 0; i < 10; i++) {        
        orderNumber += string[Math.floor(Math.random() * 10)];
    }
    
    console.log(orderNumber);

    return orderNumber;
} 