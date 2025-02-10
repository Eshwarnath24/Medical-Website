import { userDatas , updateUsers , logedUserIndex } from "../Datas/users.js";


let logedUser = userDatas[logedUserIndex];

console.log(logedUser);

document.querySelector('.js-input-user-name')
.value = logedUser.firstName;

document.querySelector('.js-input-user-email1')
.value = logedUser.emailId + "@gmail.com" ;

document.querySelector('.js-input-user-email2')
.value = logedUser.emailId + "@gmail.com" ;

document.querySelector('.js-input-user-password')
.value = logedUser.conformPassword ;

document.querySelector('.js-user-img')
.src = logedUser.profileImg ;

document.querySelector('.js-input-user-address1')
.value = logedUser.address1 ;

document.querySelector('.js-input-user-address2')
.value = logedUser.address2 ;

document.querySelectorAll('.js-city-select option')
.forEach((option) => {
    if (option.value === logedUser.city) {
        console.log(option);
        option.selected = true;
    }
});

document.querySelectorAll('.js-state-select option')
.forEach((option) => {
    if (option.value === logedUser.state) {
        console.log(option);
        option.selected = true;
    }
});


document.querySelector('.js-remove-but')
.addEventListener('click' , () => {

    let ask = confirm('Conform to remove profile image');
    console.log(ask);
    if (ask) {
        document.qerySelector('.js-user-img')
        .src = `https://pic.onlinewebfonts.com/thumbnails/icons_529886.svg`;

        userDatas[logedUserIndex].profileImg = 'https://pic.onlinewebfonts.com/thumbnails/icons_529886.svg';

        console.log(userDatas);

        updateUsers();
    }

})

document.querySelector('.js-password-hidden')
.addEventListener('click' , () => {

    let img = document.querySelector('.js-password-hidden');
    if (img.src === `https://i.pinimg.com/564x/ee/7e/16/ee7e16330f8f41aee93e8ac447eaf6bb.jpg`) {
        img.src = `https://i.pinimg.com/564x/b5/16/52/b51652e42dd5186d790073e1daf3a5f4.jpg`;
    } else {
        img.src = `https://i.pinimg.com/564x/ee/7e/16/ee7e16330f8f41aee93e8ac447eaf6bb.jpg`;
    }


    let password = document.querySelector('.input-user-password');
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }   

});

document.querySelector('.js-upload-button')
.addEventListener('click' , () => {
    let newImage ;
    const intervel = setInterval(() => {

        let newProfileImg = document.querySelector('.js-input-upload-image').value;
        if (newProfileImg) {
            newImage = newProfileImg;
            clearInterval(intervel);
        }

    }, 1000);

    console.log(newImage);
});

document.querySelector('.js-save-button')
.addEventListener('click' , () => {

    let ask = confirm('Changed changes canot be undone!!');

    if (ask) {
        logedUser.firstName = document.querySelector('.js-input-user-name').value;
        logedUser.emailId = document.querySelector('.js-input-user-email2').value;
        logedUser.conformPassword = document.querySelector('.js-input-user-password').value;
        logedUser.address1 = document.querySelector('.js-input-user-address1').value;
        logedUser.address2 = document.querySelector('.js-input-user-address2').value;
        logedUser.city = document.querySelector('.js-city-select').value;
        logedUser.state = document.querySelector('.js-state-select').value;
    }

    console.log(userDatas);
    
    updateUsers();
});


document.querySelector('.js-delete-this-account')
.addEventListener('click' , (event) => {
    let ask = confirm('You cannot undo your Account');

    if (ask) {
        userDatas.splice(logedUserIndex , 1);
        console.log(userDatas);

        updateUsers();

        event.preventDefault();
        window.location.href = '../sign in/sign in .html';
    }
});