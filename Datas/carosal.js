export function performCarosal () {
    let carosalImg = document.querySelectorAll('.carosal-card');

    carosalImg.forEach( (img , index) => {
        img.style.left = `${index * 100}%`;
    });

    let countImg = 0;

    document.querySelector('.less-symbol')
    .addEventListener('click' , () => {
        if (countImg > 0) {
            countImg--;
            makeItSlide();
        }
    });

    let rightBut = document.querySelector('.grater-symbol')
    .addEventListener('click' , () => {
        if (countImg < carosalImg.length - 1){
            countImg++;
            makeItSlide();
        }
    });

    function makeItSlide () {
        carosalImg.forEach( (img) => {
            img.style.transform = `translateX(-${countImg * 100}%)`;
        });
    } 

    setInterval(() => {

        if (countImg < carosalImg.length - 1){  
            countImg++;
            makeItSlide();
        }
        
    }, 3000);
}