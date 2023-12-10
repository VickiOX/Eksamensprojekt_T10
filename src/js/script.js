const burgerMenu = document.querySelector(".burger_menu_icon");
const dropDown = document.querySelector(".drop_down");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  dropDown.classList.toggle("active");
});
