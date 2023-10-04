const menuBtn = document.querySelector("#hamburger-menu");
const SearchBtn = document.querySelector("#search");
const shopCartBtn = document.querySelector("#shopping-cart");
const eyeBtn = document.querySelectorAll(".item-detail-btn");
const closeBtn = document.querySelector(".close-icon");

const navbarNav = document.querySelector(".navbar-nav");
const searcForm = document.querySelector(".search-form");
const searcBox = document.querySelector("#search-box");
const shopCart = document.querySelector(".shopping-cart");
const itemDetail = document.querySelector("#item-detail-modal");

menuBtn.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

SearchBtn.addEventListener("click", function (e) {
  searcForm.classList.toggle("active");
  searcBox.focus();
  e.preventDefault();
});

shopCartBtn.addEventListener("click", function (e) {
  shopCart.classList.toggle("active");
  e.preventDefault();
});

eyeBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    itemDetail.style.display = "flex";
    e.preventDefault();
  });
});

closeBtn.addEventListener("click", function (e) {
  itemDetail.style.display = "none";
  e.preventDefault();
});

document.addEventListener("click", function (e) {
  if (!menuBtn.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!SearchBtn.contains(e.target) && !searcForm.contains(e.target)) {
    searcForm.classList.remove("active");
  }

  if (!shopCartBtn.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove("active");
  }
});

window.addEventListener("click", function (e) {
  if (e.target === itemDetail) {
    itemDetail.style.display = "none";
  }
});
