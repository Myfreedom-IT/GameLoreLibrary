// header

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

// section4

const divNews = document.querySelector(".section4-div-content");
const section4Wrapper = document.querySelector(".section4-wrapper");
const lastA = document.querySelector(".section4-last-a");
let currentTranslateX = 0;
const scrollStep = 80;
const divNewsWidth0 = 1330 * 1.53;

divNews.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY;
  currentTranslateX += delta > 0 ? -scrollStep : scrollStep;

  let maxTranslateX = -(
    divNewsWidth0 - section4Wrapper.getBoundingClientRect().width
  );

  if (window.innerWidth <= 520) {
    maxTranslateX = -(
    1330 * 1.36 - section4Wrapper.getBoundingClientRect().width
    );
  }

  if (currentTranslateX > 0) {
    currentTranslateX = 0;
  }
  if (currentTranslateX <= maxTranslateX) {
    currentTranslateX = maxTranslateX;
  }

  divNews.style.transform = `translateX(${currentTranslateX}px)`;
});

// section 4 images

const newsDivs = document.querySelectorAll('.section4-div-content a div');
const newsImages = ['./img/news/rayman.png', './img/news/elden-ring.png', './img/news/witcher.png', './img/news/black-ops-6.png', './img/news/resident-evil-4.png', './img/news/gta6.png'];

newsDivs.forEach((item, index) => {
  item.style.backgroundImage = `url(${newsImages[index]})`
});

// section3

const usersChoiceGenresP = document.querySelectorAll(".genres p");
let lastClickedGenresP = null;

const gameInfo = [
  {
    name: "Payday 2",
    genre: "Шутер",
    category: "Мультиплеер",
    img: "./img/games/payday2.jpg"
  },
  {
    name: "DayZ",
    genre: "Симулятор",
    category: "Мультиплеер",
    img: "./img/games/dayz.png"
  },
  {
    name: "Dota 2",
    genre: "Стратегия",
    category: "Мультиплеер",
    img: "./img/games/dota2.png"
  },
  {
    name: "Awaria",
    genre: "Экшн",
    category: "Бесплатные",
    img: "./img/games/awaria.jpg"
  },
  {
    name: "Apex Legends",
    genre: "Шутер",
    category: "Мультиплеер",
    img: "./img/games/apexlegends.jpg"
  },
  {
    name: "Frostpunk",
    genre: "Симулятор",
    category: "Для одного",
    img: "./img/games/frostpunk.png"
  },
  {
    name: "Machinarium",
    genre: "Квест",
    category: "Для одного",
    img: "./img/games/machinarium.jpg"
  },
  {
    name: "Half-Life: Alyx",
    genre: "Шутер",
    category: "Для VR",
    img: "./img/games/halflifealyx.jpg"
  },
  {
    name: "FIFA 22",
    genre: "Симулятор",
    category: "Мультиплеер",
    img: "./img/games/fifa22.jpg"
  },
  {
    name: "Doki Doki Literature Club!",
    genre: "Новелла",
    category: "Бесплатные",
    img: "./img/games/dokidoki.jpg"
  },
];

let gameData = {
  genre: "",
  category: "",
  img: ""
};

let backgroundColor = "rgb(70,130,180)";

let lastLength = null;

let gameNames = [];
const divFilter = document.querySelector(".section3-div-filter");

function filterGames() {
  const games = gameInfo.filter((item) => {
    return (
      (item.genre === gameData.genre || gameData.genre === "") &&
      (item.category === gameData.category || gameData.category === "")
    );
  });

  gameNames = games.map((game) => game.name);

  if (gameNames.length == 2 && window.innerWidth <= 895) {
    divFilter.style.flexDirection = 'column';
    divFilter.style.alignItems = 'center';
  } else if (window.innerWidth > 895 || gameNames.length > 2) {
    divFilter.style.flexDirection = 'row';
  }

  if (gameNames.length == 3) {
    if (window.innerWidth <= 1380) {
      multiplier = 2;
      arrowsDiv.style.display = 'flex';
    };
    if (window.innerWidth <= 800){
      multiplier = 1;
    }
  }

  if (window.innerWidth <= 940 && gameNames.length > 3) {
    multiplier = 2
  };

  if (window.innerWidth <= 800) {
    multiplier = 1;
  };
  counterRight = gameNames.length - multiplier;
  divFilter.style.transform = 'translateX(0px)';

  if (window.innerWidth <= 1380 && gameNames.length >= 3) {
    arrowsDiv.style.display = 'flex';
    divFilter.style.justifyContent = 'start';
  } else {
    divFilter.style.justifyContent = 'center';
  }
  currentTransformX = 0;
  counterLeft = 0;

  if (multiplier) {
    if (gameNames.length > 3) {
      arrowsDiv.style.display = 'flex';
    };
    if (gameNames.length <= 2) {
      arrowsDiv.style.display = 'none';
    };
    if (gameNames.length == 3 && window.innerWidth > 1380) {
      arrowsDiv.style.display = 'none';
    } else if (window.innerWidth <= 1380) {
      arrowsDiv.style.display = 'flex';
    };
    if (gameNames.length <= 2) {
      arrowsDiv.style.display = 'none';
    }
  }

  console.log(multiplier)

  const gameImg = games.map((game) => game.img)

  if (lastLength) {
    document
      .querySelectorAll(".section3-div-filter a")
      .forEach((item) => item.remove());
  }

  lastLength = gameNames.length;

  for (let i = 1; i <= lastLength; i++) {
    const aGames = document.createElement('a');
    const pGames = document.createElement('p');
    pGames.innerText = gameNames[i-1];
    aGames.setAttribute("href", "#");
    aGames.style.backgroundImage = `url(${gameImg[i-1]})`;
    divFilter.append(aGames);
    aGames.append(pGames);
  }
}

usersChoiceGenresP.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (lastClickedGenresP == item) {
      lastClickedGenresP.style.background = "";
      lastClickedGenresP = null;
      gameData.genre = "";
    } else {
      if (lastClickedGenresP) {
        lastClickedGenresP.style.background = "";
      }
      item.style.background = backgroundColor;
      lastClickedGenresP = item;

      gameData.genre = item.innerText;
    }

    filterGames();
  });
});

const usersChoiceCategoriesP = document.querySelectorAll(".categories p");
let lastClickedCategoriesP = null;

usersChoiceCategoriesP.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (lastClickedCategoriesP == item) {
      lastClickedCategoriesP.style.background = "";
      lastClickedCategoriesP = null;
      gameData.category = "";
    } else {
      if (lastClickedCategoriesP) {
        lastClickedCategoriesP.style.background = "";
      }
      item.style.background = backgroundColor;
      lastClickedCategoriesP = item;
      gameData.category = item.innerText;
    }

    filterGames();
  });
});

const arrowsImg = document.querySelectorAll('.section3-arrows img');
const arrowsImgLeft = arrowsImg[0];
const arrowsImgRigth = arrowsImg[1];
let counterRight = 0;
let counterLeft = 0;
let currentTransformX = 0;
const arrowsDiv = document.querySelector('.section3-arrows');
const section3Wrapper = document.querySelector('.section3-wrapper');
let indicatorRigth = false;
let multiplier = 3;

document.addEventListener('click', event => {
  if (gameNames.length >= 4 || (window.innerWidth <= 1380 && gameNames.length >= 3)) {
    divFilter.style.justifyContent = 'start';
    if (event.target == arrowsImgRigth && counterRight > 0 && gameNames.length != 3) {
      currentTransformX -= (document.querySelector('.section3-div-filter a').offsetWidth + 40);
      divFilter.style.transform = `translateX(${currentTransformX}px)`;
      counterRight -= 1;
      counterLeft += 1;

      if (counterRight == 0) {
      currentTransformX -= (((document.querySelector('.section3-div-filter a').offsetWidth*multiplier) + 40*multiplier) - section3Wrapper.offsetWidth);
      divFilter.style.transform = `translateX(${currentTransformX}px)`;
      indicatorRigth = true;
      currentTransformX = currentTransformX + (((document.querySelector('.section3-div-filter a').offsetWidth*multiplier) + 40*multiplier) - section3Wrapper.offsetWidth);
    };
    }
    if (event.target == arrowsImgLeft && counterLeft > 0 && gameNames.length != 3) {
      currentTransformX += (document.querySelector('.section3-div-filter a').offsetWidth + 40);
      divFilter.style.transform = `translateX(${currentTransformX}px)`;
      counterLeft -= 1;
      counterRight += 1;

      if (counterLeft == 0 && indicatorRigth == true) {
        currentTransformX = 0;
        divFilter.style.transform = `translateX(${currentTransformX}px)`;
        indicatorRigth = false;
        currentTransformX = 0;
      }
    }

    if (event.target == arrowsImgRigth && counterRight > 0 && gameNames.length == 3 && window.innerWidth > 800) {
      currentTransformX -= (((document.querySelector('.section3-div-filter a').offsetWidth*3) + 40*3) - section3Wrapper.offsetWidth);
      divFilter.style.transform = `translateX(${currentTransformX}px)`;
      counterRight -= 1;
      counterLeft += 1;
      indicatorRigth = true;
    };

    if (event.target == arrowsImgRigth && counterRight > 0 && gameNames.length == 3 && window.innerWidth <= 800) {
      currentTransformX -= (((document.querySelector('.section3-div-filter a').offsetWidth) + 40));
      divFilter.style.transform = `translateX(${currentTransformX}px)`;
      counterRight -= 1;
      counterLeft += 1;

      if (counterRight == 0) {
      currentTransformX -= (((document.querySelector('.section3-div-filter a').offsetWidth*multiplier) + 40*multiplier) - section3Wrapper.offsetWidth);
      divFilter.style.transform = `translateX(${currentTransformX}px)`;
      indicatorRigth = true;
      currentTransformX = currentTransformX + (((document.querySelector('.section3-div-filter a').offsetWidth*multiplier) + 40*multiplier) - section3Wrapper.offsetWidth);
    };
    }

    if (event.target == arrowsImgLeft && counterLeft > 0 && gameNames.length == 3) {
      currentTransformX += (((document.querySelector('.section3-div-filter a').offsetWidth) + 40));
      divFilter.style.transform = `translateX(${currentTransformX}px)`;
      counterLeft -= 1;
      counterRight += 1;

      if (counterLeft == 0 && indicatorRigth == true) {
        currentTransformX = 0;
        divFilter.style.transform = `translateX(${currentTransformX}px)`;
        indicatorRigth = false;
        currentTransformX = 0;
      }
    }

}
})

// section2

const favouritesP = document.querySelectorAll('.section2 p');
const favouritesA = document.querySelectorAll('.section2-div-content div');

favouritesP.forEach((itemP, index) => {
  if (gameInfo.findIndex(game => game.name == itemP.innerText) >= 0) {
    favouritesA[index].style.backgroundImage = `url(${gameInfo.find(item => item.name == itemP.innerText).img})`;
  };
});