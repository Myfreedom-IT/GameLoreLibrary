
const headerPopupWrapper = document.querySelector(".header-popup-wrapper");
const headerButtonDesktop = document.querySelector(
  ".desktop-header .header-button"
);
const headerButtonMob = document.querySelector(".mob-header .header-button");
const desktopHeader = document.querySelector(".desktop-header");

const formButton = document.querySelector(".form-button");

document.addEventListener("click", (event) => {
  if (event.target == headerButtonDesktop || event.target == headerButtonMob) {
    headerPopupWrapper.style.display = "block";
    formButton.textContent = "Войти";
    document.body.style.overflow = 'hidden';
  }
  if (event.target == headerPopupWrapper) {
    headerPopupWrapper.style.display = "none";
    document.body.style.overflow = '';
  }
});

const signIn = document.querySelector(".sign-in");
const register = document.querySelector(".register");
const formInputs = document.querySelectorAll("form input");

register.addEventListener("click", (event) => {
  formButton.textContent = "Зарегистрироваться";
  formInputs.forEach((item) => (item.value = ""));
  signIn.addEventListener("click", (event) => {
    formButton.textContent = "Войти";
    formInputs.forEach((item) => (item.value = ""));
  });
});

const mobMenuButton = document.querySelector(".mob-header-list");
const mobMenu = document.querySelector(".mob-header-menu");
const mobBack = document.querySelector(".mob-header-back");

const mobNewsA = document.querySelector(".mob-news-a");
const mobMediaA = document.querySelector(".mob-media-a");

mobMenu.style.left = `-${window.innerWidth*0.55 + 100}px`;

window.addEventListener('resize', event => mobMenu.style.left = `-${window.innerWidth*0.55 + 100}px`);

/* console.log(`-${mobMenu.getBoundingClientRect().width}px`); */

document.addEventListener("click", (event) => {
  if (event.target == mobMenuButton) {
    mobMenu.style.left = "0";
    mobBack.style.display = "flex";
    document.body.style.overflow = 'hidden';
  }
  if (event.target == mobBack) {
    mobBack.style.display = "none";
    mobMenu.style.left = `-${mobMenu.offsetWidth + 30}px`;
    document.body.style.overflow = '';
  }
});

mobNewsA.addEventListener("click", (event) => {
  mobMenu.style.left = `-${mobMenu.offsetWidth + 30}px`;
  mobBack.style.display = "none";
  document.body.style.overflow = '';
});

mobMediaA.addEventListener("click", (event) => {
  mobMenu.style.left = `-${mobMenu.offsetWidth + 30}px`;
  mobBack.style.display = "none";
  document.body.style.overflow = '';
});