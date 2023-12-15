// Burgermenu drop down

const burgerMenu = document.querySelector(".burger_menu_icon");
const dropDown = document.querySelector(".drop_down");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  dropDown.classList.toggle("active");
});

// Kurv opdate

const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");

let products = 0;

minusBtn.addEventListener("click", minusNumber);

plusBtn.addEventListener("click", plusNumber);

function minusNumber() {
  products = products - 1;
  document.querySelector("#number").textContent = products;
}

function plusNumber() {
  products = products + 1;
  document.querySelector("#number").textContent = products;
}
