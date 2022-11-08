function loadContacts () {
  const contacts = document.createElement("div");

  const contactTitle = document.createElement("div");
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Contact Us";

  const contactCard = document.createElement("div");
  contactCard.classList.add("contact-card");

  const address = document.createElement("div");
  address.classList.add("address");
  address.textContent = "🏢 86 New Road London NW49 0EJ";

  const phone = document.createElement("div");
  phone.classList.add("phone-number");
  phone.textContent = "📞 (793) 042-3647";

  const email = document.createElement("div");
  email.classList.add("email");
  email.textContent = "📧 theodinrestaurant@restaurant.com";

  
  contactCard.appendChild(address);
  contactCard.appendChild(phone);
  contactCard.appendChild(email);

  contacts.appendChild(contactTitle);
  contacts.appendChild(contactCard);

  const content = document.querySelector("#content");
  content.appendChild(contacts);
}

export default loadContacts;