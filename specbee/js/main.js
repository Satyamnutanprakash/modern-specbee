const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contactButton = document.querySelector(".nav__contact__button");
const navMenuSubMenu = document.querySelector(".nav-menu__sub-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    contactButton.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

$(document).ready(function(){
  $('.slide__wrapper').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 450,
  });
});
