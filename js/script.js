const navbarNav = document.querySelector(".navbar-nav");
const btn = document.querySelector("#hamburger-menu");

btn.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!btn.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
