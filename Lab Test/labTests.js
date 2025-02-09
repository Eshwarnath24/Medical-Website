import { userDatas , logedUserIndex } from "../Datas/users.js";

// export let healthChecksTests = [{
//     id: 'EStALmRUoWVpFuATG1FF' ,
//     image : 'https://i.pinimg.com/736x/84/59/9d/84599d55816bea5e2117a4e93259c840.jpg' ,
//     testName: 'Full Body Checkup'
// } , {
//     id: 'TD2w-rxv26pOq5-WhG62' ,
//     image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OlX9VSKi6KEitnZJRT3Uq-h2gN8g3Y8SVNG7w0uqDcYeoNnG0lLDRRvslAdur9CmllY' ,
//     testName: 'Diabetes' 
// } , {
//     id: 'eEppi-hOxRcH1MMvMzj0' ,
//     image : 'https://i.pinimg.com/564x/ca/33/dd/ca33dd82ea410d24cb5fb6da1f97477e.jpg' ,
//     testName: 'Thyroid' 
// } , {
//     id: 'NAz-8BLq-C6CY6pRYwrF' ,
//     image : 'https://i.pinimg.com/564x/2e/33/c7/2e33c78ab26a55024286f59d31dc728b.jpg' ,
//     testName: 'Fever' 
// } , {
//     id: 'e-9g60kwze-aFXWQtFxT' ,
//     image : 'https://i.pinimg.com/564x/42/26/cc/4226cca8978fc61cc461ecdbca9a95d0.jpg' ,
//     testName: 'Vitamin' 
// } , {
//     id: 'tXMlgxObulLqPvIGTUB0' ,
//     image : 'https://i.pinimg.com/736x/98/ba/cf/98bacfd338dddaf343348deb0406306d.jpg' ,
//     testName: 'Liver'
// } , {
//     id: 'w5LhpqJ3--Y-IyroaIiW' ,
//     image : 'https://i.pinimg.com/564x/84/9f/b7/849fb7a450a1803123d4e6e6e0fd5e7f.jpg' ,
//     testName: 'Kidney' 
// } , {
//     id: 'hxfUNqH7su9wDa1ZnPmX' ,
//     image : 'https://static.vecteezy.com/system/resources/previews/007/485/501/non_2x/corona-virus-covid-19-icon-pandemic-virus-on-white-background-free-vector.jpg' ,
//     testName: 'Covid-19'
// } , {
//     id: 'nDr-kM8EX4cVz-MpajCi' ,
//     image : 'https://i.pinimg.com/564x/16/ea/68/16ea6833e894d24011dc55d1872330c1.jpg' ,
//     testName: 'Allergy' 
// } , {
//     id: 'Ny--HPEPqxv-fd1s-odS' ,
//     image : 'https://i.pinimg.com/564x/ba/a2/5e/baa25e4cf1a0a475e10493575042d83f.jpg' ,
//     testName: 'Heart' 
// } , {
//     id: 'Kdt5XmyxuWECcDSOmxHE' ,
//     image : 'https://i.pinimg.com/564x/4e/c4/34/4ec434bc896b719c11f53b0304309dac.jpg' ,
//     testName: 'Hormone'
// } , {
//     id: 'Hsnf-q-bTjtG6ccyJHT3' ,
//     image : 'https://i.pinimg.com/564x/1d/13/2c/1d132c66b6dc74eb6dd4fa74fed28427.jpg' ,
//     testName: 'Infertility'
// } , {
//     id: 'Kdtf-q-bTHPEPqxv-HT3' ,
//     image : 'https://i.pinimg.com/564x/a7/0a/1c/a70a1ca4b32bccabf4c82541b119f102.jpg' ,
//     testName: 'DNA'
// }];

let labCartID = userDatas[logedUserIndex].labCartTestId;

export let labTestCart = JSON.parse(localStorage.getItem(`${labCartID}`));

labTestCart === null ? labTestCart = [] : '' ;


export function saveLabTestCart () {
    localStorage.setItem(`${labCartID}` , JSON.stringify(labTestCart));
}


export let LabTestTotalPrice = localStorage.getItem('labTestTotalPrice');

export function saveLabTestPrice (price) {
    localStorage.setItem('labTestTotalPrice' , price);
}
