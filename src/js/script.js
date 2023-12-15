// Burgermenu drop down

const burgerMenu = document.querySelector(".burger_menu_icon");
const dropDown = document.querySelector(".drop_down");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  dropDown.classList.toggle("active");
});

// Kurv opdate

const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");

let products = 0;

document.querySelector("#number").textContent = products;

plusBtn.addEventListener("click", plusProduct);

function plusProduct() {
  products = products + 1;
  return products;
}

// minusBtn.addEventListener("click", minusProduct);

// function minusProduct() {
//   products = products - 1;
// }
