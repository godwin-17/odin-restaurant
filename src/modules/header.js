function loadHeader() {
  const header = document.createElement("header");

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const navHeader = document.createElement("div");
  navHeader.classList.add("nav-header");
  navHeader.textContent = "The Odin Restaurant";

  
  const navList = document.createElement("ul");
  navList.classList.add("nav-links");

  const listItem1 = document.createElement("li");
  listItem1.classList.add("home");
  listItem1.textContent = "Home";

  const listItem2 = document.createElement("li");
  listItem2.classList.add("menu");
  listItem2.textContent = "Menù";

  const listItem3 = document.createElement("li");
  listItem3.classList.add("contacts");
  listItem3.textContent = "Contacts";

  navbar.appendChild(navHeader);
  navbar.appendChild(navList);

  navList.appendChild(listItem1);
  navList.appendChild(listItem2);
  navList.appendChild(listItem3);

  header.appendChild(navbar);
  document.body.prepend(header);
}

export default loadHeader;