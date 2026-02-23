const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const menuLinks = mobileSidebar.querySelectorAll("a");

function toggleMenu() {
  mobileSidebar.classList.toggle("-translate-x-full");

  mobileMenuOverlay.classList.toggle("hidden");
  setTimeout(() => {
    mobileMenuOverlay.classList.toggle("opacity-0");
  }, 10);

  document.body.classList.toggle("overflow-hidden");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
mobileMenuOverlay.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
