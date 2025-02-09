import { userDatas , logedUserIndex } from "./users.js";

let profileImg = userDatas[logedUserIndex].profileImg;
let profileName = userDatas[logedUserIndex].firstName;
document.querySelector('.js-profile-img').src = `${profileImg}`;
document.querySelector('.js-profile-user-name').innerHTML = `${profileName}`;


export function profilSideBar () {
    document.querySelector('.js-profile')
    .addEventListener('click' , () => {
    let see = document.querySelector('.profile-container');
    see.classList.toggle('active');

    document.querySelector('.js-profile-container')
    .innerHTML = profileHTML();


    document.querySelector('.js-x-but')
    .addEventListener('click' , () => {
        let see = document.querySelector('.profile-container');
        see.classList.toggle('active');
        document.querySelector('.js-profile-container')
        .innerHTML = '';
    });
    });

}

export function profileHTML () {
    // let profileImg = userDatas[logedUserIndex].profileImg;
    // let profileName = userDatas[logedUserIndex].firstName;

    

    return `
    <div class="profile-box">
                <div class="profile-card">
                    <div class="x-but js-x-but">
                        <button>X</button>
                    </div>
                    <a href="../profile/profile.html" class="user-info-profile">
                        <img src="${profileImg}" class="set-profile-img js-set-profile-img">
                        <h2 class="js-fill-user-name">${profileName}</h2>
                    </a>
                    <div class="user-profile-card">

                        <a href="#" class="user-card">
                            <div class="make-row">
                                <img src="https://pic.onlinewebfonts.com/thumbnails/icons_317025.svg" alt=""/>
                                <p>Manage Family Members</p>
                            </div>
                            <div>
                                <div> > </div>
                            </div>
                        </a>
                        <a href="#" class="user-card">
                            <div class="make-row">
                                <img src="https://pic.onlinewebfonts.com/thumbnails/icons_522814.svg" alt=""/>
                                <p>Address Book</p>
                            </div>
                            <div>
                                <div> > </div>
                            </div>
                        </a>
                        <a href="#" class="user-card">
                            <div class="make-row">
                                <img src="https://pic.onlinewebfonts.com/thumbnails/icons_552387.svg" alt=""/>
                                <p>My Membership</p>
                            </div>
                            <div>
                                <div> > </div>
                            </div>
                        </a>
                        <a href="#" class="user-card">
                            <div class="make-row">
                                <img src="https://pic.onlinewebfonts.com/thumbnails/icons_312439.svg" alt=""/>
                                <p>Transaction and Payments</p>
                            </div>
                            <div>
                                <div> > </div>
                            </div>
                        </a>
                        <a href="#" class="user-card">
                            <div class="make-row">
                                <img src="https://pic.onlinewebfonts.com/thumbnails/icons_562021.svg" alt=""/>
                                <p>Health Records</p>
                            </div>
                            <div>
                                <div> > </div>
                            </div>
                        </a>
                        <a href="#" class="user-card">
                            <div class="make-row">
                                <img src="../Datas/logo2.svg" class="logo-one"/>
                                <p>ONE Name Members</p>
                            </div>
                            <div>
                                <div> > </div>
                            </div>
                        </a>
                        <a href="#" class="user-card">
                            <div class="make-row">
                                <img src="https://pic.onlinewebfonts.com/thumbnails/icons_561856.svg" alt=""/>
                                <p>Need Help</p>
                            </div>
                            <div>
                                <div> > </div>
                            </div>
                        </a>
                        <a href="../sign in/sign in .html" class="user-card">
                            <div class="make-row">
                                <img src="https://pic.onlinewebfonts.com/thumbnails/icons_572725.svg" alt=""/>
                                <p>Log out</p>
                            </div>
                            
                            <div>
                                <div> > </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    `;
}