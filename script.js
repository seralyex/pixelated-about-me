const aboutsection = document.querySelector("#aboutme-popup")

function aboutMe() {
  if (aboutsection.style.display === "none") {
    aboutsection.style.display = "block"
    setTimeout(() => {
    aboutsection.style.opacity = "1";
    }, 10)
  }
  else {
    aboutsection.style.display = "none"
  }
};

aboutsection.addEventListener("click", aboutMe)