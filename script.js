function toggleMenu() {
  const menu = document.querySelector("#hamburger-nav .nav-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const logo = document.querySelector('.logo');

logo.addEventListener('mouseenter',
  (event) => {
    logoAnimation();
  })



// *************** GSAP *****************

// Logo
function logoAnimation() {
  // const logo = document.querySelector('.logo');
  const letters = logo.textContent.split("");
  logo.textContent = "";

  letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + "</span>";
  });
  gsap.set('.letter', { display: "inline-block" });

  gsap.fromTo(".letter", { scale: .5, opacity: 1 }, { scale: 1, opacity: 1, delay: 1.2, stagger: 0.08, ease: "back.out(4)" });
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
        scrub: .8,
        // markers: true,
      }
    });
    gsap.set(article, { x: '-800%', scale: 0.8 });


    t2.to(article, { x: 0, scale: 1, duration: 1, delay: index * 0.2 });

  })
}

logoAnimation();
animateArticles();









// { defaults: { ease: "SloMo.easeOut" } }



















// Holding a B.Tech degree in Computer Science, India. I possess a strong foundation in
//             programming languages. Currently, I am engaged in intensive study of the MERN stack to broaden my skillset
//             and become a full-stack developer. My passion lies in creating user interfaces that are not only visually
//             appealing but also
//             highly responsive and user-friendly. 