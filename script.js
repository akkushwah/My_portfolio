function toggleMenu() {
  const menu = document.querySelector("#hamburger-nav .nav-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// ************** Form ******************

// let form = document.querySelector('.myform');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let fullName = document.querySelector('.fullName').value;
//   let email = document.querySelector('.email').value;
//   let message = document.querySelector('.message').value;
//   let subject = 'This mail is form your portfolio site'; // Subject of the email
//   let body = `Hello ${fullName}\n ${email}\n\n ${message}`
// })


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

headings.forEach(h => {
  h.innerHTML = h.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({ loop: true })
    .add({
      targets: 'section .letter',
      rotateY: [-90, 0],
      duration: 500,
      delay: (el, i) => 40 * i
    }).add({
      targets: 'text-wrapper',
      duration: 1000,
      easing: 'easeOutElastic(1, .6)',
      // delay: 500
    });
});



// ********************************************************
// function animateProjectCards() {
//   let projectContainer = document.querySelector('.project-container')
//   let projectCards = document.querySelectorAll('.box');

//   projectCards.forEach((card) => {
//     const t3 = gsap.timeline({
//       scrollTrigger: {
//         trigger: projectContainer,
//         start: "top 10%",
//         end: "bottom 100%",
//         scrub: .8,
//         // stagger: .1,
//         markers: true,
//       }
//     });

//     gsap.set(card, { scale: 0 });
//     t3.to(card, { scale: 1 });
//   })

// }



logoAnimation();
animateArticles();
// animateProjectCards()




















// Holding a B.Tech degree in Computer Science, India. I possess a strong foundation in
//             programming languages. Currently, I am engaged in intensive study of the MERN stack to broaden my skillset
//             and become a full-stack developer. My passion lies in creating user interfaces that are not only visually
//             appealing but also
//             highly responsive and user-friendly. 