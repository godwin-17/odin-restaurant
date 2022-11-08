import Pizza from "../../assets/pizza.jpg";
import Hamburger from "../../assets/hamburger.jpg";
import Rice from "../../assets/rice.jpg";
import Ramen from "../../assets/ramen.jpg";
import Cake from "../../assets/cake.jpg";
import Smoothie from "../../assets/smoothie.jpg";

function loadMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu-container");

  const pizza = document.createElement("div");
  pizza.classList.add("dish");
  const pizzaImg = new Image();
  pizzaImg.src = Pizza;
  pizzaImg.alt = "Pizza";
  pizzaImg.classList.add("menu-img");
  const pizzaSpan = document.createElement("span");
  pizzaSpan.textContent = "Pizza";
  pizza.appendChild(pizzaImg);
  pizza.appendChild(pizzaSpan);


  const hamburger = document.createElement("div");
  hamburger.classList.add("dish");
  const hamburgerImg = new Image();
  hamburgerImg.src = Hamburger;
  hamburgerImg.alt = "Hamburger and Fries";
  hamburgerImg.classList.add("menu-img");
  const hamburgerSpan = document.createElement("span");
  hamburgerSpan.textContent = "Hamburger and Fries";
  hamburger.appendChild(hamburgerImg);
  hamburger.appendChild(hamburgerSpan);


  const rice = document.createElement("div");
  rice.classList.add("dish");
  const riceImg = new Image();
  riceImg.src = Rice;
  riceImg.alt = "Rice";
  riceImg.classList.add("menu-img");
  const riceSpan = document.createElement("span");
  riceSpan.textContent = "Rice";
  rice.appendChild(riceImg);
  rice.appendChild(riceSpan);


  const ramen = document.createElement("div");
  ramen.classList.add("dish");
  const ramenImg = new Image();
  ramenImg.src = Ramen;
  ramenImg.alt = "Ramen";
  ramenImg.classList.add("menu-img");
  const ramenSpan = document.createElement("span");
  ramenSpan.textContent = "Ramen";
  ramen.appendChild(ramenImg);
  ramen.appendChild(ramenSpan);


  const cake = document.createElement("div");
  cake.classList.add("dish");
  const cakeImg = new Image();
  cakeImg.src = Cake;
  cakeImg.alt = "Cake";
  cakeImg.classList.add("menu-img");
  const cakeSpan = document.createElement("span");
  cakeSpan.textContent = "Cake";
  cake.appendChild(cakeImg);
  cake.appendChild(cakeSpan);


  const smoothie = document.createElement("div");
  smoothie.classList.add("dish");
  const smoothieImg = new Image();
  smoothieImg.src = Smoothie;
  smoothieImg.alt = "Smoothie";
  smoothieImg.classList.add("menu-img");
  const smoothieSpan = document.createElement("span");
  smoothieSpan.textContent = "Smoothie";
  smoothie.appendChild(smoothieImg);
  smoothie.appendChild(smoothieSpan);

  menu.appendChild(pizza);
  menu.appendChild(hamburger);
  menu.appendChild(rice);
  menu.appendChild(ramen);
  menu.appendChild(cake);
  menu.appendChild(smoothie);

  const content = document.querySelector("#content");
  content.appendChild(menu);
}

export default loadMenu;