export let userDatas = JSON.parse(localStorage.getItem('UserData'));

if (!userDatas) {
    userDatas = [{
        firstName: "Eshwar",
        lastName: "nath",
        dob: "2006-04-03",
        gender: "male",
        height: "150",
        weight: "65",
        maratalStatus: "female",
        createPassword: "eshwar123456",
        conformPassword: "eshwar123456",
        contactNumber: "1234567891",
        emailId: "madhava.dusa",
        address1: "Coimbatore",
        address2: "Amrita College",
        city: "hyd",
        state: "ts",
        pinCode: "123345",
        id: "5aRWnlCvUr" ,
        cartItemsId: "cart5aRWnlCvUr" ,
        labCartTestId: "labCartTest5aRWnlCvUr" ,
        bookingAppoinmentListId: "appointment5aRWnlCvUr" ,
        profileImg: "https://i.pinimg.com/736x/5e/d4/e7/5ed4e75f1bb313d4f027b8ecbed49725.jpg"
    }];
}

export function updateUsers () {
    localStorage.setItem('UserData' , JSON.stringify(userDatas));
}


export let logedUserIndex = JSON.parse(localStorage.getItem('logedUser'));

export function saveUserLogin (index) {
    localStorage.setItem('logedUser' , JSON.stringify(index));
}
