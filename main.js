let addUserFormEl = document.getElementById("addUserForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");

let errorMsg = "Required*";

let sectionLogPageEl = document.getElementById("sectionLogPage");
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = errorMsg;
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = errorMsg;
    } else {
        emailErrMsgEl.textContent = "";
    }
});

passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = errorMsg;
    } else {
        passwordErrMsgEl.textContent = "";
    }
});

addUserFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
})
