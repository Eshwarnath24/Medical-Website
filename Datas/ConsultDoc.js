export let consultingDocData = localStorage.getItem('doctorId');

export function saveDoctorId (consultingDocData) {
    localStorage.setItem('doctorId' , consultingDocData);
}


export let doctorPrice = localStorage.getItem('doctorPrice');

export function saveDoctorPrice (price) {
    localStorage.setItem('doctorPrice' , price);
}


export let formAppoin = JSON.parse(localStorage.getItem('formList'));

export function saveFormAppoinment (list) {
    localStorage.setItem('formList' , JSON.stringify(list));
}
