function loadFooter() {
  const footer = document.createElement("footer");

  footer.classList.add("footer");
  footer.textContent = "Made by godwin-17";

  document.body.appendChild(footer);
}

export default loadFooter;