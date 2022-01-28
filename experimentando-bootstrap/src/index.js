const navigationMenu = document.querySelector(".navbar-nav");

const toogleActive = (target) => {
  const lastActiveItem = document.querySelector(".active-link");
  const lastActiveLink = document.querySelector(".active");

  lastActiveItem.classList.toggle("active-link");
  lastActiveLink.classList.toggle("active");

  target.classList.toggle("active-link");
  target.children[0].classList.toggle("active");
};

navigationMenu.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "LI") {
    toogleActive(target);
  }
});
