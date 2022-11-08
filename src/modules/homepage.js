import Restaurant from "../../assets/restaurant.jpg";
import Chef from "../../assets/chef.jpg";

function loadHomepage() {
  const homepage = document.createElement("div");

  const presentation = document.createElement("div");
  presentation.classList.add("home-presentation");

  const welcome = document.createElement("div");
  welcome.classList.add("welcome");
  welcome.textContent = "Welcome to The Odin Restaurant";

  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "Simple and tasty food";

  presentation.appendChild(welcome);
  presentation.appendChild(description);


  const images = document.createElement("div");
  images.classList.add("home-images");

  const restaurantImg = new Image();
  restaurantImg.src = Restaurant;
  restaurantImg.alt = "Restaurant";
  restaurantImg.classList.add("res-img");

  const chefImg = new Image();
  chefImg.src = Chef;
  chefImg.alt = "Chef";
  chefImg.classList.add("res-img");

  images.appendChild(restaurantImg);
  images.appendChild(chefImg);


  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.textContent = "Made by godwin-17";

  homepage.appendChild(presentation);
  homepage.appendChild(images);
  homepage.appendChild(footer);

  const content = document.querySelector("#content");
  content.appendChild(homepage);
}

export default loadHomepage;