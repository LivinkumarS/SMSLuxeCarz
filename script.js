// Mobile Menu Toggle
function showSideBar() {
  document.querySelector(".sidebar").style.right = "0";
}
function closeSideBar() {
  document.querySelector(".sidebar").style.right = "-150%";
}
// Fade-in Effect on Scroll
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  fadeElements.forEach((el) => {
    if (el.offsetTop < scrollPosition) {
      el.style.animationDelay = "0.2s";
      el.style.animationPlayState = "running";
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);

function confettiFalling() {
  var box = document.getElementById("hero");
  var colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

  for (var i = 0; i < 1000; i++) {
    var div = document.createElement("div");
    div.classList.add("confetti");
    box.appendChild(div);
  }

  var confetti = document.querySelectorAll(".confetti");

  for (var i = 0; i < confetti.length; i++) {
    var size = Math.random() * 0.008 * [i];

    confetti[i].style.width = 5 + size + "px";
    confetti[i].style.height = 16 + size + "px";
    confetti[i].style.left = Math.random() * innerWidth + "px";

    var background = colors[Math.floor(Math.random() * colors.length)];
    confetti[i].style.backgroundColor = background;

    box.children[i].style.transform = "rotate(" + size * [i] + "deg)";
    setTimeout(() => {
      for (var i = 0; i < confetti.length; i++) {
        confetti[i].remove();
      }
    }, 11000);
  }
}
confettiFalling();
