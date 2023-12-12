// Burgermenu drop down

const burgerMenu = document.querySelector(".burger_menu_icon");
const dropDown = document.querySelector(".drop_down");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  dropDown.classList.toggle("active");
});

// Category drop down

const categoryList = document.querySelector(".drop_down_category_list");
const categoryBtn = document.querySelector(".category_bnt");
const arrow = document.querySelector(".drop_down_arrow");

categoryBtn.addEventListener("click", () => {
  categoryList.classList.toggle("active");
  arrow.classList.toggle("active");
});

// Product pop op

const seMereBtn = document.querySelector(".se_mere_bt");
const popUp = document.querySelector(".pop_up_window");

seMereBtn.addEventListener("click", () => {
  popUp.classList.toggle("active");
});
