// Menu mobile
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navigation-bar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

// SWIPPER

let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 7500,
  },
  direction: "horizontal",
  pagination: {
    clickable: true,
  },
  effect: "pagination",
  fadeEffect: {
    crossFade: false,
  },
});

// text animation
// set up text to print, each item in array is new line
var paragraphOne = new Array(
  "Confiança Significa <br /> <h1> Acreditar em si mesmo </h1>"
);

var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = paragraphOne[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.querySelector(".text-title");

  while (iRow < iIndex) {
    sContents += paragraphOne[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + paragraphOne[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != paragraphOne.length) {
      iArrLength = paragraphOne[iIndex].length;
      setTimeout("typewriter()", 500);
    }
    destination.innerHTML =
      "Confiança Significa <br /> <h1> Acreditar em si mesmo </h1>";
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

typewriter();
