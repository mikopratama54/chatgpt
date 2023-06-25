// script.js

// Hamburger Menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navbarNav.classList.toggle("open");
});
