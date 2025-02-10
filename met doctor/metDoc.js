import { doctorsData } from "./metDoc Data.js";
import { webPaging } from "./getQ.js";
import { saveDoctorId } from "../Datas/ConsultDoc.js";
import { profilSideBar , profileHTML } from "../Datas/profile-side.js";
import { saveDoctorPrice } from "../Datas/ConsultDoc.js";


console.log(webPaging);

let male = document.querySelector('.male-doc').checked;
let female = document.querySelector('.female-doc').checked;
console.log(male , female);

maleAndFemale();


document.querySelector('.js-doc-form').addEventListener('click' , () => {

    male = document.querySelector('.male-doc').checked;
    female = document.querySelector('.female-doc').checked;

    maleAndFemale();
    
    maleOnly();
    
    femaleOnly();    
});


function maleAndFemale () {  
    
    if ((!male && !female) || (male && female))  {

        let consultCode = '';
        console.log(male , female);
        
        doctorsData.forEach((doctor) => {
            
            consultCode += `
            <div class="main-doc-card" id="${doctor.id}">
                            <div class="doc-card">
                                <div class="doc-img-card">
                                    <img src="${doctor.image}" class="doc-img">
                                </div>
                                <div class="doc-info">
                                    <p id="doc-name">${doctor.doctorName}</p>
                                    <p>${webPaging}</p>
                                    <p>${doctor.doctorExp}Yrs Exp.</p>
                                    <p class="limit-text-to-2-lines">${doctor.doctorEducation}</p>
                                    <div class="doc-price">
                                        You pay <br/>
                                        <span>&#x20B9; ${doctor.doctorPrice}</span>
                                    </div>
                                    <div class="doc-language">
                                        <img src="https://pic.onlinewebfonts.com/thumbnails/icons_572729.svg">
                                        ${doctor.doctorLang}
                                    </div>
                                </div>
                            </div>
                            <div class="buttons">
                                <button class="digital js-digital" id="${doctor.id}">Book Digital</button>
                                <button class="hospital js-hospital" id="${doctor.id}">Book Hospital Vist</button>
                            </div>
                        </div>
            `;
        });
        document.querySelector('.main-doctor-grid').innerHTML = consultCode;
        bookAppointment ();
    }
}

function maleOnly () {
    if (male && !female) {

        let consultCode = '';
        console.log(male , female);
    
        doctorsData.forEach((doctor) => {
            if (doctor.doctorGender === 'male') {
                consultCode += `
                <div class="main-doc-card" id="${doctor.id}">
                                <div class="doc-card">
                                    <div class="doc-img-card">
                                        <img src="${doctor.image}" class="doc-img">
                                    </div>
                                    <div class="doc-info">
                                        <p id="doc-name">${doctor.doctorName}</p>
                                        <p>${webPaging}</p>
                                        <p>${doctor.doctorExp}Yrs Exp.</p>
                                        <p class="limit-text-to-2-lines">${doctor.doctorEducation}</p>
                                        <div class="doc-price">
                                            You pay <br/>
                                            <span>&#x20B9; ${doctor.doctorPrice}</span>
                                        </div>
                                        <div class="doc-language">
                                            <img src="https://pic.onlinewebfonts.com/thumbnails/icons_572729.svg">
                                            ${doctor.doctorLang}
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <button class="digital js-digital" id="${doctor.id}">Book Digital</button>
                                    <button class="hospital js-hospital" id="${doctor.id}">Book Hospital Vist</button>
                                </div>
                            </div>
                `;
            }
        });
        document.querySelector('.main-doctor-grid').innerHTML = consultCode;
        bookAppointment ();
    }
}

function femaleOnly () {
    if (!male && female) {

        let consultCode = '';
        console.log(male , female);
    
        doctorsData.forEach((doctor) => {
            if (doctor.doctorGender === 'female') {
                consultCode += `
                <div class="main-doc-card" id="${doctor.id}">
                                <div class="doc-card">
                                    <div class="doc-img-card">
                                        <img src="${doctor.image}" class="doc-img">
                                    </div>
                                    <div class="doc-info">
                                        <p id="doc-name">${doctor.doctorName}</p>
                                        <p>${webPaging}</p>
                                        <p>${doctor.doctorExp}Yrs Exp.</p>
                                        <p class="limit-text-to-2-lines">${doctor.doctorEducation}</p>
                                        <div class="doc-price">
                                            You pay <br/>
                                            <span>&#x20B9; ${doctor.doctorPrice}</span>
                                        </div>
                                        <div class="doc-language">
                                            <img src="https://pic.onlinewebfonts.com/thumbnails/icons_572729.svg">
                                            ${doctor.doctorLang}
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <button class="digital js-digital" id="${doctor.id}">Book Digital</button>
                                    <button class="hospital js-hospital" id="${doctor.id}">Book Hospital Vist</button>
                                </div>
                            </div>
                `;
            }
        });
        document.querySelector('.main-doctor-grid').innerHTML = consultCode;
        bookAppointment();
    }
    
}

function bookAppointment () {
    document.querySelectorAll('.js-digital').forEach((bookbut) => {
        bookbut.addEventListener('click' , (event) => {
            let docCardId = bookbut.id;
    
            doctorsData.forEach((doctor) => {
                if (docCardId === doctor.id) {

                    saveDoctorId(doctor.id);

                    document.querySelector('.doctor-name')
                    .innerText = `${doctor.doctorName}`;

                    let price = doctor.doctorPrice;
                    
                    document.querySelector('.conformed-book-appoint')
                    .style.transform = `translateY(${190}px)`;
                    document.querySelector('.conformed-book-appoint')
                    .classList.toggle('active');

                    setTimeout(() => {
                        document.querySelector('.conformed-book-appoint')
                        .style.transform = `translateY(-${190}px)`;
                        document.querySelector('.conformed-book-appoint')
                        .classList.toggle('active'); 

                        saveDoctorPrice(price);

                        event.preventDefault();
                        window.location.href = '../Fill Appointment/appointment.html';

                    }, 3000);

                }
            });
        });
    });
}
document.querySelector('.cross h1').addEventListener('click' , () => {
    document.querySelector('.conformed-book-appoint')
    .classList.toggle('inactive');
    document.querySelector('.conformed-book-appoint')
    .style.transform = `translateY(-${190}px)`;
    setTimeout(() => {
        document.querySelector('.conformed-book-appoint')
        .classList.toggle('inactive');
    }, 1000);

});


profileHTML();
profilSideBar();