function showSideBar() {
  document.querySelector(".sidebar").style.right = "0";
}
function closeSideBar() {
  document.querySelector(".sidebar").style.right = "-150%";
}

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
