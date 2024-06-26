function toggleMenu() {
  const menu = document.querySelector("#hamburger-nav .nav-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// ************** Form ******************


// *************** GSAP *****************

// Logo
const logos = document.querySelectorAll('.logo');
logos.forEach(logo => {
  logo.addEventListener('mouseenter',
    () => {
      logoAnimation();
    })
});

function logoAnimation() {
  const logos = document.querySelectorAll('.logo');
  logos.forEach(logo => {
    const letters = logo.textContent.split("");
    logo.textContent = "";

    letters.forEach((letter) => {
      logo.innerHTML += '<span class="letter">' + letter + "</span>";
    });
    gsap.set('.letter', { display: "inline-block" });

    gsap.fromTo(".letter", { scale: 0, opacity: 1 }, {
      scale: 1, opacity: 1, stagger: 0.05, ease: "SloMo.easeIn",
    });
  })
}


// Front heading

let t1 = gsap.timeline();

t1.fromTo("#first", { x: "-100%" }, { x: "0%", delay: 0.5, ease: "back" });

t1.fromTo("#second", { x: "200%" }, { x: "0%", ease: "back" });



// Scroll Trigger

function animateArticles() {

  let skillContainer = document.querySelector(".skill-container");
  let articles = document.querySelectorAll("article");

  articles.forEach((article, index) => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: skillContainer,
        start: "top 100%",
        end: "top 100%",
        scrub: .9
        // stagger: .9,
        // markers: true,
      }
    });
    gsap.set(article, { x: '-800%', scale: 0.2 });
    t2.to(article, { x: 0, scale: 1, duration: 1, delay: index * 0.2 });
  })
}

// **********************************************
// hedings
let headings = document.querySelectorAll('section .title');



// ********************************************************



logoAnimation();
animateArticles();
// animateProjectCards()

