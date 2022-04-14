const btn_login = document.querySelector('.login_form')
const password = document.querySelector('.js-login__password')
const email = document.querySelector('.js-input__login')



let account = {
    email: 'tuananh0852131210@gmail.com',
    password: 'Tuananh12'
}

const validateEmail = () => {
    if (email.value == account.email) {
        return true
    }
    else {
        return false
    }
}

const validatePassword = () => {
    if (password.value == account.password) {
        return true
    }
    else {
        return false
    }
}



email.onkeyup = (e) => {
    if (e.keyCode === 13) {
        alert('Vui lòng nhập đầy đủ')
    }
}

password.onkeyup = (e) => {
    if (e.keyCode === 13) {
        let isEmail = validateEmail()
        let isPassword = validatePassword()
        if (isEmail && isPassword) {
            window.location.href = 'https://www.facebook.com/bean.tuan.777'
        }
        else {
            alert('Tài khoản không chính xác')
        }
    }
}


btn_login.onclick = () => {
    let isEmail = validateEmail()
    let isPassword = validatePassword()
    if (isEmail && isPassword) {
        window.location.href = 'https://www.facebook.com/bean.tuan.777'
    }
    else {
        alert('Tài khoản không chính xác')
    }
}

