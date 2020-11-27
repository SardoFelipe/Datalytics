const hamburger_menu = document.querySelector(".hamburger-menu");
const cont1 = document.querySelector(".cont1");
hamburger_menu.addEventListener("click", () => {
  cont1.classList.toggle("active");
});
