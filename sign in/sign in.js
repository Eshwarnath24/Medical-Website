/*let userDatas = [{
    id : 'a12vgth95fes5' ,
    firstName: 'Adam' ,
    phoneNumber: '1234567891' ,
    createPassword: '12rfds6',
    conformPassword: '12rfds6' 
} , {
    id : 'ds4265dw15fc2',
    firstName: 'Lewis' ,
    phoneNumber: '3698521473' ,
    createPassword: 'd5sfb41',
    conformPassword: 'd5sfb41' 
}];*/

import { userDatas , saveUserLogin } from "../Datas/users.js";

console.log(userDatas);



let takeSignInData = document.querySelector('.js-login-but');
takeSignInData.addEventListener('click' , (event) => {
    let userName = document.querySelector('.js-username').value.trim();

    let loginPassword = document.querySelector('.js-password').value.trim();


    let matchedUser;
    let matchedUserIndex;
    userDatas.forEach((userData , index) => {
        if (userData.firstName === userName) {
            matchedUser = userData;
            matchedUserIndex = index;
        }   
    });

    if (matchedUser) {
        if (loginPassword === matchedUser.conformPassword) {
            console.log('You will be loged in soon...');

            saveUserLogin(matchedUserIndex);

            event.preventDefault();
            window.location.href = '../main/appScreenPage.html';


        } else {
            alert('Incorrect Password');
        }
    } else {
        alert('Could not find this user name');
    }
    
});

