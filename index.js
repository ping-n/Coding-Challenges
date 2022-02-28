burger = document.querySelector(".burger");
nav = document.querySelector("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
  burger.classList.toggle("open");
});
