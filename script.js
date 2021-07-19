const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);