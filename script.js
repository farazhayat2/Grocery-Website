// Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('move')
    navLinks.classList.toggle('open-menu')
}

// Close Menu on Scroll
window.onscroll = () => {
  menuIcon.classList.remove('move')
    navLinks.classList.remove('open-menu')
}

// Header
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0)
})




// Products Filtering
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productBoxes = document.querySelectorAll(".product-box");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Manage active button state
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterText = button.textContent.toLowerCase().trim();

      productBoxes.forEach((box) => {
        const categorySpan = box.querySelector(".category");
        if (!categorySpan) return;

        const itemCategory = categorySpan.textContent.toLowerCase().trim();
        let isMatch = false;


        if (filterText === "all") {
          isMatch = true;
        } else if (filterText === "meats") {
          isMatch = (itemCategory === "meat" || itemCategory === "seafood");
        } else {
          isMatch = itemCategory.includes(filterText) || filterText.includes(itemCategory);
        }

        if (isMatch) {
          box.classList.remove("hidden");
          
          box.classList.remove("animate-in");
          void box.offsetWidth; 
          box.classList.add("animate-in");
        } else {
          box.classList.remove("animate-in");
          box.classList.add("hidden");
        }
      });
    });
  });
});

// Scroll Reveal
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 200,
})

animate.reveal('.nav');
animate.reveal('.home-text, .shipping-content', {origin: 'left'})
animate.reveal('.home-img', {origin: 'bottom'})
animate.reveal('.shipping-image img', {origin: 'right'})
animate.reveal('.box, .banner-box, .product-box, .footer-col',{interval: 100})