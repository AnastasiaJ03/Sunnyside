const burger = document.getElementById("burgerbutton");
const menu = document.querySelector(".header ul");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});
