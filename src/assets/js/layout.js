//--------------- mobile--------------------------------
const navBtnMob = document.querySelector("#nav__btn_mob");
//let navDropContBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop__cont"));
let navDropContMainBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_main"));
const navBtnMobResources = document.querySelector("#nav_bottom__btn_resources");
let navDropContMarketsBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_markets"));
const navBtnMobProducts = document.querySelector("#nav_bottom__btn_products");
let navDropContProductsBS = new bootstrap.Collapse(document.querySelector("#nav_bottom__drop_products"));

const menuMobButtons = document.querySelectorAll(".navbtn");



//------------------------------desktop------------------------------------

const navMarketsBtn = document.querySelector("#nav_bottom__markets-btn");
let navMarketsBS = new bootstrap.Collapse(document.querySelector("#nav-section_markets"));
const navProductsBtn = document.querySelector("#nav_bottom__products-btn");
let navProductsBS = new bootstrap.Collapse(document.querySelector("#nav-section_products"));
//const navSearchsBtn = document.querySelector("#nav_top__btn_search");
let navSearchBS = new bootstrap.Collapse(document.querySelector("#nav-section_search"));

//---------------------------------cookies----------------------------------

const cookieButtons = document.querySelectorAll(".btn_cookies");
const blockCookiesBS = new bootstrap.Collapse(document.querySelector("#block_cookies"));




//-----------------------------------side menu / modal ----------------------------------

const modalMessageCloseBtn = document.querySelector(".contactUsModal__btn_close");
const modalMessageSubmitBtn = document.querySelector(".contactUsModal__btn_submit");
const modalMessageValidateInputs = document.querySelectorAll(".validate");
const modalMessageBS = new bootstrap.Modal(document.getElementById('contactUsModal'))
const contactUsModal = document.querySelector("#contactUsModal");


//------------------------------- store -----------------------------------------------

let store = { 
    menu: "",
    showCookies: false,
    modalContactUS: false,
    cookies_delay: 3000
}



//----------------- menu mob---------------------------------------------------
function toggleMobMenu(menuName) {
    //console.log("menuName = ", menuName);
    //console.log("store.menu before ", store.menu);

    if (menuName === store.menu) {
        store.menu = "";
    } else {
        if (store.menu && menuName === "mob_main") {
            store.menu = "";
        } else {
            store.menu = menuName;
        }
    }

    //console.log("store.menu after ", store.menu);


    if (store.menu === "") {
        navDropContMainBS.hide();
        navDropContMarketsBS.hide();
        navDropContProductsBS.hide();
        navProductsBS.hide();
        navMarketsBS.hide();
        navSearchBS.hide();
        navMarketsBtn.classList.remove("opened")
        navProductsBtn.classList.remove("opened")
        navBtnMob.classList.remove("opened");
    }
    
    if ((store.menu === "mob_main") || (store.menu === "mob_back")) {
        navBtnMob.classList.add("opened");
        navDropContMainBS.show();
        navDropContMarketsBS.hide();
        navDropContProductsBS.hide();
    }

    if (store.menu === "mob_markets") {
        navBtnMob.classList.add("opened");
        navDropContMainBS.hide();
        navDropContMarketsBS.show();
        navDropContProductsBS.hide();
    }

    if (store.menu === "mob_products") {
        navBtnMob.classList.add("opened");  
        navDropContMainBS.hide();
        navDropContMarketsBS.hide();
        navDropContProductsBS.show();
    }

    if (store.menu === "markets") {
        navMarketsBS.show();
        navProductsBS.hide();
        navSearchBS.hide();
        navProductsBtn.classList.remove("opened")
        navMarketsBtn.classList.add("opened")
    }

    if (store.menu === "products") {
        navProductsBS.show();
        navMarketsBS.hide();
        navSearchBS.hide();
        navMarketsBtn.classList.remove("opened")
        navProductsBtn.classList.add("opened")
    }

    if (store.menu === "search") {
        navSearchBS.show();
        navMarketsBS.hide();
        navProductsBS.hide();
        navMarketsBtn.classList.remove("opened")
        navProductsBtn.classList.remove("opened")
    }

    if (store.menu === "contact_modal") {
        modalMessageBS.show()
        navSearchBS.hide();
        navMarketsBS.hide();
        navProductsBS.hide();
        navMarketsBtn.classList.remove("opened")
        navProductsBtn.classList.remove("opened")
    }

}

menuMobButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        toggleMobMenu(button.dataset.navbtn);
    })
})




//--------------------cookies---------------------------


function cookiesAction(action) {
    console.log("cookies: ", action);
    if (action === "close") {
        store.showCookies = false;
        //insert some deny-cookie action here
    }
    if (action === "accept") {
        store.showCookies = false;
        //insert some accept-cookie action here
    }
    if (action === "deny") {
        store.showCookies = false;
        //insert some deny-cookie action here
    }
    store.showCookies ? blockCookiesBS.show() :  blockCookiesBS.hide();
}

cookieButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        cookiesAction(button.dataset.cookieaction);
    })
})  

setTimeout(() => {
    store.showCookies ? blockCookiesBS.show() : null;
}, store.cookies_delay)







//--------------------------------modal ----------------------------------------------


function modalMessageSubmitClicked(e) {
    
    let correct = true;
    modalMessageValidateInputs.forEach(input => !input.validity.valid ? correct = false : null )
    if (correct) {
        // send form logic should be here
        let sendingData = []
        modalMessageValidateInputs.forEach((input) => sendingData.push(input.value));
        console.log("sending data: ", sendingData);
        //store.menu = "";
        alert("All data has been sent!");
        modalMessageBS.hide()

    } else {
        console.log('Incorrect sending data, sending canceled');
    }
}


modalMessageSubmitBtn.addEventListener("click", (e) => {
    modalMessageSubmitClicked(e);
})


contactUsModal.addEventListener("hide.bs.modal", (e) => {
    store.menu = "";
})



