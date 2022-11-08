import './style.css';
import header from './modules/header.js';
import home from './modules/homepage.js';
import contact from './modules/contact.js';

header();
home();
// contact();

const homeBtn = document.querySelector("li.home");
const menuBtn = document.querySelector("li.menu");
const contactsBtn = document.querySelector("li.contacts");

homeBtn.addEventListener("click", () => {
  document.querySelector("#content").innerHTML = "";
  home();
});

menuBtn.addEventListener("click", () => {
  document.querySelector("#content").innerHTML = "";
  /* Add menu code here */
});

contactsBtn.addEventListener("click", () => {
  document.querySelector("#content").innerHTML = "";
  contact();
});