/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from(".nav-logo", {
  opacity: 0,
  duration: 0.2,
  delay: 0.8,
  y: 30,
  ease: "expo.out",
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 0.2,
  delay: 0.05,
  y: 35,
  ease: "expo.out",
  stagger: 0.1,
});
gsap.from(".welcome", {
  opacity: 0,
  duration: 0.8,
  delay: 1,
  y: 30,
  ease: "expo.out",
  stagger: 0.5,
});
gsap.from(".football-title", {
  opacity: 0,
  duration: 0.8,
  delay: 1.2,
  y: 30,
  ease: "expo.out",
  stagger: 0.5,
});
gsap.from(".calendar", {
  opacity: 0,
  duration: 0.8,
  delay: 1.4,
  y: 30,
  ease: "expo.in",
  stagger: 0.1,
});
gsap.from(".buy-btn", {
  opacity: 0,
  duration: 0.8,
  delay: 1.8,
  y: 30,
  ease: "expo.in",
  stagger: 0.2,
});
gsap.from(".NFT", {
  opacity: 0,
  duration: 0.8,
  delay: 2.2,
  y: 30,
  ease: "expo.out",
  stagger: 0.1,
});

////////////////stop watch

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    // zaman değiştirmek için burdan ayarlayın
    dayMonth = "11/24/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        ));
    }, 0);
})();

/*====== SCROLL REVEAL ======*/
const sr = ScrollReveal({
  duration: 2500,
  reset: false,
});

sr.reveal(".about-content", {
  origin: "left",
  distance: "90px",
  delay: 20,
  duration: 2000,
});
sr.reveal(".ballPitch", {
  origin: "bottom",
  distance: "90px",
  delay: 20,
  duration: 2000,
});
sr.reveal(".road1", {
  origin: "bottom",
  distance: "90px",
  delay: 50,
  duration: 1000,
});
sr.reveal(".road2", {
  origin: "bottom",
  distance: "90px",
  delay: 450,
  duration: 1000,
});
sr.reveal(".road3", {
  origin: "bottom",
  distance: "90px",
  delay: 850,
  duration: 1000,
});
sr.reveal(".road4", {
  origin: "bottom",
  distance: "90px",
  delay: 1250,
  duration: 1000,
});
sr.reveal(".road5", {
  origin: "bottom",
  distance: "90px",
  delay: 1650,
  duration: 1000,
});
sr.reveal(".team-member", {
  origin: "bottom",
  distance: "90px",
  delay: 200,
  duration: 1000,
  interval: 100,
});
sr.reveal(".label", {
  origin: "bottom",
  distance: "90px",
  delay: 200,
  duration: 1000,
  interval: 200,
});

////////slider

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

////// accordion

const accordion = document.getElementsByClassName("contentBox");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("accordion-active");
  });
}

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".mobNav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
