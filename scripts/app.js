//Resume button - 0
// let resume0 = document.getElementById("resume-button-0");

// resume0.onclick = () => {
//   window.open("./assets/Rushi-Joshi-Resume.pdf")
// }

// Resume Button 1
// let resume = document.getElementById("resume-button-1");

// resume.onclick = () => {
//   if (window) {
//     window.open("./assets/Rushi_Joshi_Resume.pdf");
//   }
// };

//resume onclick - both button
 function resumeOnclick() {
  const button = "Resume button"
   window.open("./assets/Rushi_Joshi_Resume.pdf");
}

// Resume button - 2
// let resume2 = document.getElementById("resume-button-2");

// resume2.onclick = () => {
//   if (window) {
//     window.open("https://drive.google.com/file/d/1kdwgjOFzfqFQ0ZaANLVuD6JZcNH9bDSO/view?usp=share_link");
    
//   }
// };

// Navigation Menu
const navMenu = document.querySelector(".navigation");
const navButton = document.querySelector("#navigation-button");
let isMenuActive = false;

const navButtonLinks = document.querySelectorAll(".navigation li a");

navButtonLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navIconMenu = `<i class="bi bi-list"></i>`;
    navButton.innerHTML = navIconMenu;
    isMenuActive = false;
    navMenu.classList.remove("show");
    navMenu.classList.remove("animate__animated");
    navMenu.classList.remove("animate__bounceInLeft");
  });
});

navButton.addEventListener("click", () => {
  if (!isMenuActive) {
    const navIconClose = `<i class="bi bi-x-lg"></i>`;
    navButton.innerHTML = navIconClose;
    isMenuActive = true;
  } else {
    const navIconMenu = `<i class="bi bi-list"></i>`;
    navButton.innerHTML = navIconMenu;
    isMenuActive = false;
  }
  // Show and Hide Menu
  navMenu.classList.toggle("show");
  navMenu.classList.toggle("animate__animated");
  navMenu.classList.toggle("animate__bounceInLeft");
});

// Splidejs Slide
// const splide = new Splide('.splide', {
//   type: 'loop',
//   direction: 'ltr',
//   width: '72%',
//   height: '40rem',
//   autoplay: true,
//   perPage: 1,
//   breakpoints: {
//     1100: {
//       height: '42rem',
//       width: '90%'
//     },
//     720: {
//       height: '46rem',
//       width: '100%'
//     },
//     400: {
//       height: '50rem'
//     }
//   }
// });

// splide.mount();

// Scroll Reveal
ScrollReveal().reveal(".about", { delay: 300 });
ScrollReveal().reveal(".testimonials", { delay: 300 });
ScrollReveal().reveal(".contact", { delay: 300 });
