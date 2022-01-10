


var headerS = document.querySelector('.header__search-history');

headerS.onmousedown = function(e) {
    e.preventDefault();
};


const modalBasic = document.querySelector('.js-registration');
const authForm1 = document.querySelector('.auth-form1');
const modalBig = document.querySelector('.modal');
const modalOver = document.querySelector('.modal__overlay');
const modalLogin = document.querySelector('.js-login');
const authForm2 = document.querySelector('.auth-form2');
const convert = document.querySelector('.js-switch1');
const convert2 = document.querySelector('.js-switch2');
const btnAll = document.querySelectorAll('.auth-form__controls-back');
const mobileSearch = document.querySelector('.header__search');
const mobileSearch1 = document.querySelector('.header__mobile-search');
const app1 = document.querySelector('.app__container');
const app2 = document.querySelector('.header');
const userOpen = document.querySelector('.user-login');
const userHeading = document.querySelector('.header__user');
const loginMobile = document.querySelectorAll('.user-login-item');

// console.log(loginMobile)


for (a = 0; a < loginMobile.length; a++) {
    loginMobile[0].onclick = function() {
        authForm1.classList.add('open');
        modalBig.classList.add('modal-open');
        if (authForm2 == document.querySelector('.auth-form2.open')) {
            authForm2.classList.remove('open')
        }
    }

    loginMobile[1].onclick = function() {
        authForm2.classList.add('open')
        modalBig.classList.add('modal-open');

        if (authForm1 == document.querySelector('.auth-form1.open')) {
            authForm1.classList.remove('open')
        }

    }

}



userHeading.onclick = function() {
    if (userOpen != document.querySelector('.user-login.user__open')) {
        
        userOpen.classList.add('user__open')
    }
   
}

document.querySelector('.user-login-list').onclick = function() {
    userOpen.classList.remove('user__open')
}




function showResgistration() {
        authForm1.classList.add('open');
        modalBig.classList.add('modal-open')

};

function hideResgitration() {
        authForm1.classList.remove('open');
        modalBig.classList.remove('modal-open')
}

function showLogin() {
    authForm2.classList.add('open')
    modalBig.classList.add('modal-open')
}

function hideLogin() {
    authForm2.classList.remove('open')
    modalBig.classList.remove('modal-open')
}

function hoanDoi() {
    authForm1.classList.remove('open');
    authForm2.classList.add('open');
}

function hoanDoi2() {
    authForm1.classList.add('open');
    authForm2.classList.remove('open');
}

function closeAll() {
    authForm1.classList.remove('open');
    authForm2.classList.remove('open');
    modalBig.classList.remove('modal-open')

} 

function addMobile() {
    mobileSearch.classList.add('header__search-mobile-open')
}


for (const btn of btnAll) {
    btn.addEventListener('click', closeAll )
}

modalBasic.addEventListener('click', showResgistration);
modalOver.addEventListener('click', hideResgitration);
modalOver.addEventListener('click', hideLogin);
modalLogin.addEventListener('click', showLogin);
convert.addEventListener('click', hoanDoi);
convert2.addEventListener('click', hoanDoi2);
mobileSearch1.addEventListener('click', addMobile);
app1.onclick = function() {
    mobileSearch.classList.remove('header__search-mobile-open');
    userOpen.classList.remove('user__open')
}

// an hien passworld


let x = true;
const showOffPass = document.querySelector('.showOff-pass');
const showOffPass2 = document.querySelector('.showOff-pass2');
const passLogin = document.getElementById('passLogin');

showOffPass2.onclick = function() {
    if (x) {
        this.classList.add('open')
        passLogin.type = 'text';
        x = false
    }
    else {
        this.classList.remove('open');
        passLogin.type = 'password'
        x = true
    }
}

showOffPass.onclick = function() {
    const inputPass =  document.querySelectorAll('.auth-form__input');

    for (z = 0; z < inputPass.length; z++) {

        console.log(inputPass)
        
        if(x) {
            showOffPass.classList.add('open');
            inputPass[1].type = 'text';
            inputPass[2].type = 'text';
            x = false
        }
        else{
            showOffPass.classList.remove('open');
            inputPass[1].type = 'password';
            inputPass[2].type = 'password';
            x = true
        }
    }
}


