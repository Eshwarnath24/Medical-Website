/*let userDatas = [{
    id : 'a12vgth95fes5' ,
    firstName: 'Adam' ,
    contactNumber: '1234567891' ,
    createPassword: '12rfds6',
    conformPassword: '12rfds6' 
} , {
    id : 'ds4265dw15fc2',
    firstName: 'Lewis' ,
    contactNumber: '3698521473' ,
    createPassword: 'd5sfb41',
    conformPassword: 'd5sfb41' 
}];*/

import { userDatas , updateUsers } from "../Datas/users.js";

let generatedOTP;

let getOTP = document.querySelector('.js-get-otp');
if (getOTP) {
    getOTP.addEventListener('click' , (event) => {

        let phoneNum = document.querySelector('.input-phone-num').value;
        let optCode = `
                        <div class="otp-card">
                            <div class="otp-main-card">
                                <p>
                                    Enter the OTP sent to 
                                    <span>+91 ${phoneNum}</span>
                                </p>
                                <div class="otp-digit6">
                                    <input type="text" class="digit1-otp" maxlength="1">
                                    <input type="text" class="digit2-otp" maxlength="1">
                                    <input type="text" class="digit3-otp" maxlength="1">
                                    <input type="text" class="digit4-otp" maxlength="1">
                                    <input type="text" class="digit5-otp" maxlength="1">
                                    <input type="text" class="digit6-otp" maxlength="1">
                                </div>
                            </div>
                            <div class="opt-error">
                                <p>
                                    Didn't resive any OTP?
                                    <a href="#" class="otp-error-hyperlink">Resend code</a>
                                </p>
                            </div>
                            <div class="verify-but-card">
                                <button class="js-verify-but js-verify-but1">Verify</button>
                            </div>
                        </div>
                    `
        let changeingUserData = null;
        if (phoneNum.length === 10) {
            let getOTPAccess = checkNumber(phoneNum);
            if (getOTPAccess) {
                let userFound = false;
                userDatas.forEach((Data) => {
                    if (Data.contactNumber == phoneNum) {
                        userFound = true;
                        changeingUserData = Data;
                    }
                });
                if (userFound) {
                    document.querySelector('.js-changing-card').innerHTML = optCode;
                    generatedOTP = generateOTP(); 
                    console.log(generatedOTP);
                } else {
                    alert(`This PhoneNumber havn't registered`);
                    event.preventDefault();
                    window.location.href = '../registration/register.html';
                }
                
            } else {
                alert('Check your Phone number');
                console.log('here');
            }
            
        } else {
            alert('Check your Phone number');
            console.log(phoneNum);
            for (let a of phoneNum) {
                console.log(a);
            }
        }
    
        let getVerifed = document.querySelector('.js-verify-but');
        if (getVerifed) {
            getVerifed.addEventListener('click' , () => {
                let resultVerif = allowInByVerification ();
        
                if (resultVerif) {
                   makeNewPassword();
                    let updateNewPassword = document.querySelector('.con-button') ;
                    if (updateNewPassword) {
                        updateNewPassword.addEventListener('click' , (event) => {
                            let newPass = document.querySelector('.con-new-password').value;
                            changeingUserData
                            
                            if (changeingUserData.conformPassword === newPass) {
                                alert(`You must enter New Password`);
                                document.querySelector('.con-new-password').value = '';
                                document.querySelector('.c-newpassword').value = '';
                            } else {
                                changeingUserData.conformPassword = newPass;
                                changeingUserData.createPassword = newPass;

                                updateUsers();

                                event.preventDefault();
                                window.location.href = '../sign in/sign in .html';
                            }
            
                            console.log(changeingUserData);
                        });
                    }
                    
                }
        
            });
        }
        
        
        let getOTPAgain = document.querySelector('.otp-error-hyperlink');
        if (getOTPAgain) {
            getOTPAgain.addEventListener('click' , () => {
                generatedOTP = generateOTP(); 
                console.log(generatedOTP);
        
        
                document.querySelector('.digit1-otp').value = '';
                document.querySelector('.digit2-otp').value = '';
                document.querySelector('.digit3-otp').value = '';
                document.querySelector('.digit4-otp').value = '';
                document.querySelector('.digit5-otp').value = '';
                document.querySelector('.digit6-otp').value = '';
        
        
                let getVerifed = document.querySelector('.js-verify-but1');
                getVerifed.addEventListener('click' , () => {
                    let resultVerifica = allowInByVerification ();
        
                    if (resultVerifica) {
                        makeNewPassword();
                    }
                });
            });
        }
    });
}

console.log(userDatas);


function checkNumber (number) {
    for (let digit of number) {
        if (isNaN(parseInt(digit))) {
            return false;
        }
    }
    return true;
}

function generateOTP() {
    const characters = '0123456789';
    let result = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function allowInByVerification () {
    let inCodeOTP = document.querySelector('.digit1-otp').value + 
                    document.querySelector('.digit2-otp').value + 
                    document.querySelector('.digit3-otp').value +
                    document.querySelector('.digit4-otp').value +
                    document.querySelector('.digit5-otp').value + 
                    document.querySelector('.digit6-otp').value;

    if (inCodeOTP === generatedOTP) {
        return true;
    } else {
        alert('Entered OTP is wrong'); 
    }
}

function makeNewPassword () {
    document.querySelector('.tittle').innerHTML = `
                <div class="new-password">
                <h1>OTP verified</h1>
                <img src="https://img.freepik.com/premium-vector/verified-square-grunge-checkmark-icon-vector-stock-illustration_100456-9344.jpg" class="verified-img" />
            </div>
            <div class="take-new-pass">
                <div class="new-pass">
                    <p>New Password</p>
                    <input type="password" class="c-newpassword">
                </div>
                <div class="con-new-pass">
                    <p>Conform New Password</p>
                    <input type="password" class="con-new-password">
                </div>
                <div class="con-but-card">
                    <button class="con-button">Conform</button>
                </div>
            </div>
    `;
}
