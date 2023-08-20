const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const promptss = document.querySelector("#prompt");
const quotess = document.querySelector("#quote");
const ccontainer = document.querySelector("#c-container");
const lastdance = document.querySelector(".center-outro-container");

const maincontainer = document.querySelector("#container");
const todocontainer = document.querySelector("#todo-container");


const HIDDEN_CLASSNAME = "hidden";
const CENTER_INTRO = "center-intro-container";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    promptss.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
    maincontainer.classList.remove(HIDDEN_CLASSNAME);
    todocontainer.classList.remove(HIDDEN_CLASSNAME);
    quotess.classList.remove(HIDDEN_CLASSNAME);
    ccontainer.classList.remove(CENTER_INTRO);
    lastdance.classList.remove(HIDDEN_CLASSNAME);


 }

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    promptss.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    maincontainer.classList.remove(HIDDEN_CLASSNAME);
    todocontainer.classList.remove(HIDDEN_CLASSNAME);
    quotess.classList.remove(HIDDEN_CLASSNAME);
    ccontainer.classList.remove(CENTER_INTRO);
    lastdance.classList.remove(HIDDEN_CLASSNAME);

}       