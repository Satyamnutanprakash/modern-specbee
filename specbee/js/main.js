const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contactButton = document.querySelector(".nav__contact__button");
const navMenuSubMenu = document.querySelector(".nav-menu__sub-menu");
const devAccordion = document.querySelectorAll(".development__accordion");


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

devAccordion.forEach(item => {

const title = document.querySelector(".development__accordion__title");

title.addEventListener('click', () => {
    for ( i=0; i < devAccordion.length; i++) {
        if (devAccordion[i] != item) {
            devAccordion[i].classList.remove('active');
        }
        else {
            item.classList.toggle('active');
        }
    }
    });
})

