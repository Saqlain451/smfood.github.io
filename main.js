const bars = document.querySelector(".fa-bars");
const header = document.querySelector(".header");

let bar = false;

const toggle = () => {
  header.classList.toggle("active");
  if (bar == false) {
    bars.classList = "fa-solid fa-xmark";
    bar = true;
  } else {
    bars.classList = "fa-sharp fa-solid fa-bars";
    bar = false;
  }
};

bars.addEventListener("click", toggle);
