import './style.css';
import header from './modules/header.js';
import footer from './modules/footer.js';
import home from './modules/homepage.js';
import contact from './modules/contact.js';

header();
footer();
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