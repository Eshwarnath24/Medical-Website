import { consultingDocData } from "../Datas/ConsultDoc.js";
import { doctorsData } from "../met doctor/metDoc Data.js";
import { formAppoin } from "../Datas/ConsultDoc.js";
import { webPaging } from "../met doctor/getQ.js";


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
                                <div class="price-doc">&#x20B9; ${doctor.doctorPrice}  Paid</div>
                            </div>
                            <div class="doctor-specility">
                                <p>Specility :</p>
                                <div class="special-doc"> ${webPaging}  </div>
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



setTimeout(() => {
    document.querySelector('.js-change-till-doctor')
    .innerHTML = `
                        <div class="met-doc-video-grid">
                            <div class="docter-video-card">
                                <div class="docter-video">

                                    <div class="user-video-card2">
                                        <div class="user-video2">
            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="user-video-card">
                                <div class="user-video">

                                </div>
                            </div>
                        </div>
    `;
}, 5000);








document.querySelector('.js-patient-info')
.innerHTML = `
                                    <p><span>Name:</span> ${formAppoin[0].firstName}</p>
                                    <p><span>Age:</span> ${age(formAppoin)}Yrs</p>
                                    <p><span>Height:</span> ${formAppoin[0].heigth} cm</p>
                                    <p><span>Weight:</span> ${formAppoin[0].weight} kgs</p>
`;

console.log(formAppoin);

function age (a) {
    return 2024 - (a[0].dob[0] + a[0].dob[1] + a[0].dob[2] + a[0].dob[3])
}