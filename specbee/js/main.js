const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const contactButton = document.querySelector(".nav__contact__button");
const navMenuSubMenu = document.querySelector(".nav-menu__sub-menu");
const addition = document.querySelector(".addition");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    contactButton.classList.toggle("active");
})

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))

addition.addEventListener("click", () => {
    addition.classList.toggle("active");
    navMenuSubMenu.classList.toggle("active");
})



const accordionItems = document.querySelectorAll('.development__accordion');

accordionItems.forEach((item) => {
  const title = item.querySelector('.development__accordion__title');
  const content = item.querySelector('.development__accordion__content');

  title.addEventListener('click', function() {
    const expandedItem = document.querySelector('.development__accordion.active');
    const expandedContent = expandedItem?.querySelector('.development__accordion__content');

    if (expandedItem && expandedContent !== content) {
      expandedItem.classList.remove('active');
      expandedContent.classList.remove('show');
    }

    item.classList.toggle('active');
    content.classList.toggle('show');
  });
});


