const showMenu = document.querySelector("#burguer");
const menu = document.querySelector("#navigation .menu");
const burg = document.querySelector("#navigation .burguer");

showMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
  burg.classList.toggle("show");
});
