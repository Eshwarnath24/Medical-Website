import { doctorPrice } from "../Datas/ConsultDoc.js";
import { consultingDocData } from "../Datas/ConsultDoc.js";
import { doctorsData } from "../met doctor/metDoc Data.js";
import { saveFormAppoinment } from "../Datas/ConsultDoc.js";
import { webPaging } from "../met doctor/getQ.js";
import { profilSideBar , profileHTML } from "../Datas/profile-side.js";

doctorsData.forEach((doctor) => {
    if (consultingDocData === doctor.id) {
        let doctorTData = document.querySelector('.doctor-total-data');

        doctorTData.innerHTML = `
        <div class="doctor-img">
                            <img src="${doctor.image}" alt="">
                        </div>
                        <div class="doctor-info">
                            <h1 class="doctor-name">${doctor.doctorName}</h1>
                            <div class="doctor-price">
                                <p>Amount :</p>
                                <div class="price-doc">&#x20B9; ${doctor.doctorPrice} Not Paid</div>
                            </div>
                            <div class="doctor-special">
                                <p>Specility :</p>
                                <div class="special-doc"> ${webPaging} </div>
                            </div>
                            <div class="doctor-lang">
                                <p>Languages known :</p>
                                <div class="lang-doc">${doctor.doctorLang}</div>
                            </div>
                            <div class="doctor-exp"><span>${doctor.doctorExp} Yrs </span> of Experience</div>
                        </div>
        `;
    }
});


let formList = [];

console.log(doctorPrice);



document.querySelector('.js-submit-form')
.addEventListener('click' , (event) => {
    let firstName = document.querySelector('.js-input-first-name').value;
    let lastName = document.querySelector('.js-input-last-name').value;
    let dob = document.querySelector('.js-input-patient-dob').value;
    let phNumber = document.querySelector('.js-input-patient-number').value;
    let email = document.querySelector('.js-input-patient-email').value;
    let heigth = document.querySelector('.js-input-height').value;
    let weight = document.querySelector('.js-input-weight').value;
    let foodEnquireYes = document.querySelector('.js-input-yes').checked;
    let foodEnquireNO = document.querySelector('.js-input-no').checked;
    let answer = foodEnquireYes ? "yes" : ""; 
    if (!foodEnquireYes)
        answer = foodEnquireNO ? "no" : ""; 


    let data = {
        firstName ,
        lastName ,
        dob ,
        phNumber ,
        email ,
        heigth ,
        weight ,
        answer
    };

    

    let allFilled;
    if (checkPhNumber(phNumber)) {
        allFilled = checkIsAllFilled(data);

    } else {
        alert('Check your Phone number');
    }

    if (allFilled) {
        formList.push(data);

        saveFormAppoinment(formList);

        setTimeout(() => {
            event.preventDefault();
            window.location.href = '../Consult room/Consult.html';
        }, 3000);
    }

});



function checkIsAllFilled (data) {
    let Values = Object.values(data);
    let Tittle = Object.keys(data);

    console.log(Object.keys(data));
    console.log(Object.values(data));

    let errorCount = 0;

    Values.forEach((value , index) => {
        if (value === '') {
            errorCount++;
            if (errorCount == 1) {
                alert(`Please fill ${Tittle[index]}`);
            }
        }
    });

    if (errorCount == 0) {
       return true; 
    } 
    errorCount = 0;
}

function checkPhNumber (number) {
    let completeCheck = true;
    let checked;

    for (let i = 0 ; i < number.length ; i++) {
        0 <= parseInt(number[i])  && parseInt(number[i]) < 10 ? '' : checked = false;
    }

    if (!checked && checked !== undefined) {
        completeCheck = false;
    } else {
        number.length === 10 ? '' : completeCheck = false;  
    }

    return completeCheck;
}

profileHTML();
profilSideBar();