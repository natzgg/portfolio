//Intro Animation

const intro = document.querySelector('.intro');
const logo = document.querySelector('.intro-header');
const textSpan = document.querySelectorAll('.text');

window.addEventListener('DOMContentLoaded', () => {
  console.log('eeee');
  textSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add('appear');
    }, (idx + 1) * 90);
  });

  setTimeout(() => {
    textSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove('appear');
        span.classList.add('fade');
      }, (idx + 1) * 80);
    });
  }, 1500);

  setTimeout(() => {
    intro.style.top = '-100vh';
  }, 2000);
});


/*Auto write text*/

var writer = document.getElementById('autoWrite');

var typewriter = new Typewriter(writer, {
  strings: [
    'Aspiring Game Developer',
    'React.js Developer',
    'Front-end Developer',
    'Gamer',
    'MOBA Player',
  ],
  loop: true,
  autoStart: true,
});

//Add Menu
const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show_menu');
    });
  }
};

showMenu('nav_toggle', 'nav-menu');

/*Active and remove menu*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*This is for removing menu on click on mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show_menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  reset: false,
});

sr.reveal(".about-text", { delay: 400 });
sr.reveal(".about-image-container", { delay: 400 });
