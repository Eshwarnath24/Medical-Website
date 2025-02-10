import { userDatas , logedUserIndex } from "../Datas/users.js";

let userPerson = userDatas[logedUserIndex];

document.querySelector('.js-user-mail-id')
.innerHTML = hideEmail(userPerson.emailId);


document.querySelector('.resend-hyperlink')
.classList.toggle('active');
document.querySelector('.warning-container')
.classList.toggle('active');
let OTP = getOTP();
secondsCountdown();


document.querySelector('.js-resend-hyperlink')
.addEventListener('click' , () => {
    OTP = getOTP();
    secondsCountdown();
    document.querySelector('.warning-container')
    .classList.toggle('active');
});

let filledOTPPart = setInterval(() => {

    document.querySelector('.js-otp-number1').value ? document.querySelector('.js-otp-number1').style.borderColor = "dodgerblue" : '';
    document.querySelector('.js-otp-number2').value ? document.querySelector('.js-otp-number2').style.borderColor = "dodgerblue" : '';
    document.querySelector('.js-otp-number3').value ? document.querySelector('.js-otp-number3').style.borderColor = "dodgerblue" : '';
    document.querySelector('.js-otp-number4').value ? document.querySelector('.js-otp-number4').style.borderColor = "dodgerblue" : '';

}, 500);


document.querySelector('.js-payment-ok-but')
.addEventListener('click' , () => {
    let otpPart1 = document.querySelector('.js-otp-number1').value;
    let otpPart2 = document.querySelector('.js-otp-number2').value;
    let otpPart3 = document.querySelector('.js-otp-number3').value;
    let otpPart4 = document.querySelector('.js-otp-number4').value;

    let userOTP = otpPart1 + otpPart2 + otpPart3 + otpPart4;

    if (userOTP.length == 4) { 
        if (userOTP === OTP) {
            console.log('Payment successfull');
            
            clearInterval(filledOTPPart);

            document.querySelector('.success-confirm-page')
            .classList.toggle('active');

        } else {
            alert('Entered OTP is wrong');
        }
    } else {
        alert('OTP to be filled');
    }
});



let timeOutError = setTimeout(() => {
    document.querySelector('.failled-confirm-page')
    .classList.toggle('active');
}, 80000);


document.querySelector('.js-cancel-but')
.addEventListener('click' , () => {
    document.querySelector('.failled-confirm-page')
    .classList.toggle('active');

    clearTimeout(timeOutError);
});




function hideEmail (mail) {
    let start = mail[0] + mail[1];
    let end = mail[mail.length-2] + mail[mail.length-1] + '@gmail.com';
    
    let remainingLength = mail.length - 4;
    
    let middle = '';
    if (remainingLength < 10) {
        for (let i = 0; i < remainingLength; i++) {
            middle += '*';
        }
    } else {
        middle = '**********';
    }

    return start + middle + end ;
} 

function secondsCountdown () {
    let timeCount = 60;
    document.querySelector('.js-seconds-count')
    .innerHTML = timeCount;

    let countSeconds = setInterval(() => {
        if (timeCount < 1) {
            timeCount = 60;
            clearInterval(countSeconds);
            
            document.querySelector('.warning-container')
            .classList.toggle('active');
            document.querySelector('.resend-hyperlink')
            .classList.toggle('active');
        } else {
            timeCount--;
            document.querySelector('.js-seconds-count')
            .innerHTML = timeCount;
        }
        
    }, 1000);

    document.querySelector('.js-resend-hyperlink')
    .addEventListener('click' , () => {
        clearInterval(countSeconds);
    });

}

function getOTP () {
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    
    console.log(OTP);

    return OTP;
} 