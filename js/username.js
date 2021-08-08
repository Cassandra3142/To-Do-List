const loginForm = document.querySelector('#login_form');
const loginInput = document.querySelector('#login_form input');
const nickname = document.querySelector('#nickname');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const inputValue = loginInput.value;
    localStorage.setItem(USERNAME_KEY,inputValue);
    painting(inputValue);
}

function painting(inputValue) {
    nickname.innerText = `Welcome ${inputValue}`;
    nickname.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
} else {
    painting(savedUsername);
}
    