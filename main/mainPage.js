import { doctorsDatas , changingDoctors , buyingItemsCard , courseCardRef } from './doctors.js';
import { saveWebName } from '../met doctor/getQ.js';
import { profilSideBar } from "../Datas/profile-side.js";
import { performCarosal } from '../Datas/carosal.js';
import { userDatas , logedUserIndex } from '../Datas/users.js';

// let profileImg = userDatas[logedUserIndex].profileImg;
// let profileName = userDatas[logedUserIndex].firstName;
// document.querySelector('.js-profile-img').src = `${profileImg}`;
// document.querySelector('.js-profile-user-name').innerHTML = `${profileName}`;
let doctorCardCode = ''

doctorsDatas.forEach ( (data) => {
    changingDoctors.push({
        id: data.id ,
        webPageAddress: data.speclityName
    });

    doctorCardCode += `
                    <a href="../met doctor/metDoctor.html" class="centering" id="${data.id}">
                        <div class="doctor-card">
                            <p class="specialty">${data.speclityName}</p>
                            <img src="${data.speclityImage}" class="doctor-img" />
                            <p class="probs">
                                ${data.probs1} <br/>
                                ${data.probs2}
                            </p>
                        </div>
                    </a>
    `;
});



document.querySelector('.doctors-card')
.innerHTML = doctorCardCode;

console.log(doctorsDatas);



let doctorConsultancy = document.querySelectorAll('.centering');
doctorConsultancy.forEach ((code) => {
    code.addEventListener('click' , () => {
        console.log(code.id);
        changingDoctors.forEach((webPageCard) => {
            if (code.id === webPageCard.id) {
                // code to be prepared.........
                console.log(`you will be loged into ${webPageCard.webPageAddress}`);
                saveWebName(webPageCard.webPageAddress);
            }
        });
        
    });
});

let courseCard = document.querySelector('.main-course-card22');
let courseCode = ''
buyingItemsCard.forEach ( (item) => {


    courseCode += `
    <div class="course-card" id="${item.id}">
        <div class="course-img-card">
            <img src="${item.cardImage}" class="course-img" />
        </div>
        <div class="course-info">
            <h3>${item.cardName}</h3>
            <p>${item.offers}</p>
        </div>
    </div>
    `;
    courseCardRef.push({
        id: item.id , 
        fileName: item.cardName ,
        webName: item.cardName + '.html'
    });

});

courseCard.innerHTML = courseCode ;

document.querySelectorAll('.course-card').forEach ((card) => {
    card.addEventListener('click' , (event) => {
        courseCardRef.forEach((card2) => {
            if (card2.id === card.id) {
                console.log(`you will be loged into ${card2.webName}`);
                event.preventDefault();
                window.location.href = `../${card2.fileName}/${card2.webName}`;
            }
        });
    });
});



let specilityBookHtml = `
        <option value="">--Please Select--</option> 
    `;
doctorsDatas.forEach((value , index) => {
    specilityBookHtml += `
        <option value="${value.speclityName}" id="bookID-${(index + 1).toFixed(3)}">${value.speclityName}</option>
    `;
});

document.querySelector('.js-select-speci').innerHTML = specilityBookHtml;


let bookedListID = userDatas[logedUserIndex].bookingAppoinmentListId;
let bookingList = JSON.parse(localStorage.getItem(`${bookedListID}`));

if (!bookingList) {
    bookingList = [];
}

makeBookAppoinmentSee (bookingList);

function saveBookingList () {
    localStorage.setItem(`${bookedListID}` , JSON.stringify(bookingList));
}

console.log(bookingList);

document.querySelector('.js-book-submit-but')
.addEventListener('click' , () => {
    let location = document.querySelector('.js-book-location').value;
    let date = document.querySelector('.js-booking-date').value;
    let doctor = document.querySelector('.js-select-speci').value;
    

    !location ? alert('Please Fill Location!') : '' ;
    !date ? alert('Please Fill the Booking Data!') : '' ;
    !doctor ? alert('Please Fill the Spciallity doctor!') : '' ;

    if (location && date && doctor) {
        let id = generateRandomId(10);

        let bookingData = {
            id ,
            location ,
            date ,
            doctor
        };

        bookingList.push(bookingData);
        
        saveBookingList();
        
        makeBookAppoinmentSee(bookingList);
    }

});

function deletingAppoinment () {
    let deleteLink = document.querySelectorAll('.js-hyperlink-delete');
    deleteLink.forEach((link) => {
        link.addEventListener('click' , () => {
            console.log(link.dataset.deleteId);
            let deletingId = link.dataset.deleteId;
            
            let getdeleteIndex;
            bookingList.forEach((book , index) => {
                if (book.id === deletingId)
                    getdeleteIndex = index;
            });
        
            bookingList.splice(getdeleteIndex , 1);

            saveBookingList();
            

            makeBookAppoinmentSee(bookingList);
        });
    });
}



function makeBookAppoinmentSee (bookedlist) {

    

    if (bookedlist.length === 0) {
        document.querySelector('.js-show-appoinments-container')
        .innerHTML = 
        `
        <img src="https://i.pinimg.com/564x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.jpg" />
        `;
    } else {
        let bookedAppointmentHtml = '';
        bookedlist.forEach((appoinment) => {
        
            bookedAppointmentHtml += `
            <div class="show-appointment-card">
                            <p>${appoinment.location}</p>
                            <p>${appoinment.date}</p>
                            <p>${appoinment.doctor}</p>
                            <button class="js-hyperlink-delete" data-delete-id="${appoinment.id}">Delete</button>
                        </div>
            `;
        });

        document.querySelector('.js-show-appoinments-container')
        .innerHTML = bookedAppointmentHtml;

        deletingAppoinment();
    }

}











function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}


performCarosal();

profilSideBar();