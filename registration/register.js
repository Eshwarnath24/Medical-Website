import { userDatas , updateUsers } from "../Datas/users.js";

console.log(userDatas);

let getAccess;
 
let takeDatas = document.querySelector('.js-register');
if (takeDatas) {
    takeDatas.addEventListener('click' , (event) => {
        const firstName = document.querySelector('.js-input-name').value.trim();
        const lastName = document.querySelector('.js-input-name2').value.trim();
        const dob = document.querySelector('#js-dob').value;
        const gender = document.querySelector('.js-gender-select').value;
        const height = document.querySelector('.js-get-height').value.trim();
        const weight = document.querySelector('.js-get-weight').value.trim();
        const maratalStatus = document.querySelector('.js-maratal-status-select').value;
        const createPassword = document.querySelector('.js-create-password').value.trim();
        const conformPassword = document.querySelector('.js-conform-password').value.trim();
        const contactNumber = document.querySelector('#js-contact-num').value.trim();
        const emailId = document.querySelector('#js-email').value.trim();
        const address1 = document.querySelector('.js-address1').value;
        const address2 = document.querySelector('.js-address2').value;
        const city = document.querySelector('.js-city-select').value;
        const state = document.querySelector('.js-state-select').value;
        const pinCode = document.querySelector('.js-pin-code').value.trim();
        const profileImg = "https://pic.onlinewebfonts.com/thumbnails/icons_529886.svg";

        const id = null;
        const bookingAppoinmentListId = null;
        const cartItemsId = null;
        const labCartTestId = null;
    
        if (createPassword === '') {
            console.log('hello');
        }
        
        let data = {
            firstName ,
            lastName ,
            dob ,
            gender ,
            height ,
            weight ,
            maratalStatus , 
            createPassword ,
            conformPassword,
            contactNumber ,
            emailId ,
            address1 ,
            address2 ,
            city ,
            state ,
            pinCode ,
            id ,
            bookingAppoinmentListId ,
            cartItemsId ,
            labCartTestId ,
            profileImg
        };
    
        
    
    
    
        let procedeResult = checkFilledOrNot(data);
        console.log(procedeResult);
    
        if (procedeResult) {
            if ((data.contactNumber).length === 10) {
                getAccess = checkNumber(data.contactNumber);
                if (!getAccess) {
                    alert('Check your Phone number');
                }
            } else {
                alert('Check your Phone number');
            }
        }
    
        console.log(getAccess);
        
        let matched;
        if (userDatas.length !== 0) {
            let matchingData = false;
    
            if (procedeResult && getAccess) {
                userDatas.forEach ((userData) => {
                    if (userData.contactNumber === contactNumber) {
                        alert('This number is already registered');
                        matchingData = true;
                    }
                });
        
                if (matchingData === false) {
                    data.id = generateRandomId();
                    data.cartItemsId = `cart${data.id}`;
                    data.bookingAppoinmentListId = `appointment${data.id}`;
                    data.labCartTestId = `labCartTest${data.id}`;
                    matched = isPasswordsMatch(data.createPassword , data.conformPassword);
                    if (matched) {
                        userDatas.push(data);
                    }
                }
            }
        } else {
            if (procedeResult && getAccess) {
                data.id = generateRandomId();
                data.cartItemsId = `cart${data.id}`;
                data.bookingAppoinmentListId = `appointment${data.id}`;
                data.labCartTestId = `labCartTest${data.id}`;

                matched = isPasswordsMatch(data.createPassword , data.conformPassword);
                if (matched) {
                    userDatas.push(data);
                }
            }
        }
          
        console.log(userDatas);

        updateUsers();
        
    
        if (procedeResult && matched) {
            event.preventDefault();
            window.location.href = "../sign in/sign in .html"
        }
    });
}



function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function checkFilledOrNot(data) {
    delete data.id;
    console.log(data);

    let errorCount = 0;

    Object.entries(data).forEach((element) => {
        if (element[1] === '') {
            errorCount++;
        }
        if (errorCount === 1) {
            alert(`${element[0]} is not filled`);
        }
    });

    if (errorCount === 0) {
        return true;
    }
}

function isPasswordsMatch (createPassword , conformPassword) {
    if (createPassword.length <= 6) {
        alert('Password must be more than 6 digits');
    } else {
        if (createPassword === conformPassword) {
            return true;
        } else {
            alert(`Both the passwords doesn't match each other`);
        }
    }
} 

function checkNumber (number) {
    for (let digit of number) {
        if (isNaN(parseInt(digit))) {
            return false;
        }
    }
    return true;
}