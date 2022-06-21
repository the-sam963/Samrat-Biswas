const mobile_btn = document.querySelector(".mobile-btn");
const nav_container = document.querySelector(".nav-container");
const nav_pages = document.querySelector(".pages");

const ToggleNavbar = () => {
    nav_container.classList.toggle("active-nav")
}
const ToggleButton = () => {
    mobile_btn.classList.toggle("active-btn")
}


mobile_btn.addEventListener("click", () => ToggleNavbar());
nav_pages.addEventListener("click", () => ToggleNavbar());
mobile_btn.addEventListener("click", () => ToggleButton());