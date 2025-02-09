import { profilSideBar , profileHTML } from "../Datas/profile-side.js";
import { labTestCart , saveLabTestCart } from "./labTests.js";
import { totalLabTests } from "../Datas/subLabTests.js";


console.log(labTestCart);

document.querySelector('.health-checks-head h1 span')
.innerHTML = totalLabTests.length

makeLabTests(8);

let labTestCount = 0;
document.querySelector('.js-view-all-tests')
.addEventListener('click' , () => {
    labTestCount++;

    labTestCount === 1 ? makeLabTests(totalLabTests.length) : makeLabTests(8) ;

    labTestCount === 2 ? labTestCount = 0 : '';

    choosingLabTest();
})



function makeLabTests (num) {
    let labTests = document.querySelector('.js-lab-page-grid');

    let labTestHtml = '';
    let labTestCount = 0;
    totalLabTests.forEach ((test) => {
        if (labTestCount < num) {
            labTestHtml += `
            <div class="box-lab-test" data-lab-test-id="${test.id}">
                                    <img src="${test.image}" />
                                    <p>${test.testName}</p>
                                </div>
            `;
            labTestCount++; 
        }
        
    });

    labTests.innerHTML = labTestHtml;

    choosingLabTest();
} 


function choosingLabTest () {
    let testSelected = document.querySelectorAll('.box-lab-test');
    testSelected.forEach((test) => {
        test.addEventListener('click' , () => {
            let selectedTestId = test.dataset.labTestId;
            let selectedTest;
            console.log(selectedTestId);
    
            totalLabTests.forEach((labTest) => {
                if (selectedTestId === labTest.id) {
                    selectedTest = labTest;
                    makeSubLabTests (selectedTest);
                }
            });
        });
    });
}

function makeSubLabTests (labDetails) {
    console.log(labDetails);

    let subLabCardHtml = '';
    (labDetails.subLabtestList).forEach((card) => {
        subLabCardHtml += `
        <div class="sub-lab-test-card js-sub-lab-test-card-${labDetails.id}">
            
            <div>
                <img src="${labDetails.image}" alt="">
            </div>    
            <p>${card.testName}</p>

            <div class="price-info">
                <p>&#x20B9; ${card.price}</p>
                <button class="book-sub-lab js-book-sub-lab" data-card-id="${card.id}" data-sub-lab-test-id="${labDetails.id}">Book Now</button>
            </div>
            
        </div>
        `;
    });
    document.querySelector('.js-sub-lab-tests-head')
    .innerHTML = `${labDetails.testName} ( ${(labDetails.subLabtestList).length} )`;

    document.querySelector('.js-sub-lab-tests-grid')
    .innerHTML = subLabCardHtml;

    makeButtonWork();
}



function makeButtonWork () {
    let bookButton = document.querySelectorAll('.js-book-sub-lab');
    bookButton.forEach((button) => {
        button.addEventListener('click' , () => {
            let buttonId = button.dataset.cardId; // 'Dia-001'
            let cardId = button.dataset.subLabTestId; // 'TD2w-rxv26pOq5-WhG62'
            console.log(cardId, buttonId);
            let matchedMain;
            let matchedSub;
            
            totalLabTests.forEach((card) => {
                card.id === cardId ? matchedMain = card : '';
            });
            console.log(matchedMain);
            (matchedMain.subLabtestList).forEach((subcard) => {
                if (subcard.id == buttonId) {
                    matchedSub = subcard;
                }
            });

            console.log(matchedMain , matchedSub);

            labTestCart.push({
                id : matchedMain.id ,
                image : matchedMain.image ,
                testName : matchedMain.testName ,
                sub: matchedSub
            });

            console.log(labTestCart);

            saveLabTestCart();
 
            bookedLabTest();
            
        });
    });
}


function bookedLabTest () {
    document.querySelector('.tooltip-card')
    .classList.toggle('active');

    setTimeout(() => {
        document.querySelector('.tooltip-card')
        .classList.toggle('active');

        document.querySelector('.tooltip-card')
            .classList.toggle('inactive');
    }, 3000);

    document.querySelector('.js-but-cross')
    .addEventListener('click' , () => {
        document.querySelector('.tooltip-card')
        .classList.toggle('inactive');
    });
}


profileHTML();
profilSideBar();