const btn__regis = document.querySelector(".btn__regis");
const userRes = document.getElementById("userRes");
const passRes = document.getElementById("passRes");
const rePassRes = document.getElementById("rePassRes");
const loginIpts = document.querySelectorAll(".login-ipt");

let dataAccountUsers = [];

btn__regis.onclick = function (e) {
  e.preventDefault();
  let detailRegis = {};
  let isError = true;

  if (userRes.value.trim().length < 8) {
    userRes.parentElement.querySelector(".error").innerText =
      "Tên đăng nhập tối thiểu 8 kí tự";
    userRes.style.border = "1px solid red";
    isError = false;
  }
  if (passRes.value.trim().length < 6) {
    passRes.parentElement.querySelector(".error").innerText =
      "Mật khấu tối thiểu 6 kí tự";
    passRes.style.border = "1px solid red";
    rePassRes.style.border = "1px solid red";
    isError = false;
  }

  if (passRes.value.trim() != rePassRes.value.trim()) {
    passRes.parentElement.querySelector(".error").innerText =
      "Mật khẩu không khớp";
    passRes.style.border = "1px solid red";
    rePassRes.parentElement.querySelector(".error").innerText =
      "Mật khẩu không khớp";
    rePassRes.style.border = "1px solid red";
    isError = false;
  }

  for (const loginIpt of loginIpts) {
    if (loginIpt.value.trim() == "") {
      loginIpt.parentElement.querySelector(".error").innerText =
        "Dữ liệu không được để trống";
      loginIpt.style.border = "1px solid red";
      isError = false;
    }

    loginIpt.oninput = () => {
      loginIpt.parentElement.querySelector(".error").innerText = "";
      loginIpt.style.border = "";
    };
  }

  if (isError) {
    detailRegis.userName = userRes.value;
    detailRegis.passWord = passRes.value;

    if (
      dataAccountUsers.some(
        (account) => account.userName == detailRegis.userName
      )
    ) {
      userRes.parentElement.querySelector(".error").innerText =
        "Tên đăng nhập đã có người sử dụng";
      userRes.style.border = "1px solid red";
      isError = false;
    } else {
      dataAccountUsers.push(detailRegis);
      userRes.value = "";
      passRes.value = "";
      rePassRes.value = "";
      document.querySelector(".regis__success").style.display = "block";
    }
  }
};

document.querySelector(".resOke").onclick = function () {
  this.parentElement.style.display = "none";
};

// login
const loginReal = document.querySelector(".login-real");
const loginField = ["ipt__login-user", "ipt__login-pass"];
const ipt__loginUser = document.querySelector("#ipt__login-user");
const ipt__loginPass = document.querySelector("#passLogin");

loginReal.onclick = function (e) {
  e.preventDefault();
  let isError = true;
  let accountLogin = {};

  if (ipt__loginUser.value.trim() == "") {
    ipt__loginUser.parentElement.querySelector(".error").innerText =
      "Dữ liệu không được để trống";
    ipt__loginUser.style.border = "1px solid red";
    isError = false;
  }
  if (ipt__loginPass.value.trim() == "") {
    ipt__loginPass.parentElement.querySelector(".error").innerText =
      "Dữ liệu không được để trống";
    ipt__loginPass.style.border = "1px solid red";
    isError = false;
  }

  ipt__loginUser.oninput = () => {
    ipt__loginUser.parentElement.querySelector(".error").innerText = "";
    ipt__loginUser.style.border = "";
  };
  ipt__loginPass.oninput = () => {
    ipt__loginPass.parentElement.querySelector(".error").innerText = "";
    ipt__loginPass.style.border = "";
  };

  if (isError) {
    accountLogin.userName = ipt__loginUser.value;
    accountLogin.passWord = ipt__loginPass.value;

    if (checkAccountLogin(accountLogin)) {
      const user = document.querySelector(".user");
      if (dataAccountUsers) {
        let usersLi = document.querySelectorAll(".isUser");
        for (const Li of usersLi) {
          Li.style.display = "none";
        }

        user.innerHTML = `
         <div class="header__navbar--lange">
        <a class="header__navbar-item-link" href="#"
          ><i class="header__navbar-icon fas fa-user"></i>
          ${accountLogin.userName}

          <div class="header__navbar-sub">
            <ul class="header__navbar-col">
              <li class="header__navbar-language">
                Tài khoản của tôi
              </li>
              <li class="header__navbar-language">Đăng xuất</li>
            </ul>
          </div>
        </a>
      </div> 
        `;

        document.querySelector(".modal").classList.remove("modal-open");
      }
    } else {
      alert("dang nhap that bai");
    }
  }
};

// Check accountLogin

function checkAccountLogin(accountCheck) {
  let test = dataAccountUsers.some(
    (accountUser) =>
      accountUser.userName == accountCheck.userName &&
      accountUser.passWord == accountCheck.passWord
  );

  return test;
}
