"use strict";

const footerGrid = document.querySelector(".footer-grid");

const footer = document.querySelector("footer");

const main = document.querySelector("main");

const width = window.innerWidth;

// Menu toggle
document.querySelector("#bars-div").addEventListener("click", function () {
  document.querySelector("#menu").classList.toggle("hidden");
});

//// Footer appear/disappear ////

// When scroll on main, reduce size of footer

main.addEventListener(
  "scroll",
  function () {
    if (width <= 1200) {
      footerGrid.style.display = "none";
      footer.style.height = "7%";
      main.style.height = "75.5%";
    }
  },
  { passive: true }
);

const hideFooter = function () {
  if (width <= 1200) {
    footerGrid.style.display = "none";
    footer.style.height = "7%";
    main.style.height = "70.5%";
  }
};

// When clicking on arrow, return footer to original size

// Show footer

const showFooter = function () {
  if (width <= 1200) {
    footerGrid.style.display = "grid";
    footer.style.height = "20%";
    main.style.height = "56.5%";
  }
};

document.querySelector("#arrow").addEventListener("click", function () {
  showFooter();
});

// Lazy load img
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, obs) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function (e) {
    e.target.classList.remove("lazy-load");
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  treshold: 0,
});

imgTargets.forEach((img) => imgObserver.observe(img));
