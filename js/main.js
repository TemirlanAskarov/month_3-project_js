// RANDOM COLOR GENERATOR

const buttonsColor = document.querySelectorAll(".btn-color");
const javaScript = document.querySelector("#js-color");

const generateRandomColor = () => {
  const hexCodes = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return "#" + color;
};

const setRandomColors = () => {
  buttonsColor.forEach((buttonColor) => {
    buttonColor.innerHTML = generateRandomColor();
    buttonColor.onclick = (event) => {
      javaScript.style.color = event.target.innerHTML;
    };
  });
};

window.onload = () => setRandomColors();
window.onkeydown = (event) => {
  if (event.code.toLowerCase() === "space") {
    event.preventDefault();
    setRandomColors();
  }
};

// SLIDER BLOCK

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
let index = 0;

const hideSlide = () => {
  slides.forEach((slide) => {
    slide.style.opacity = 0;
    slide.classList.remove("active_slide");
  });
};
const showSlide = (i = 0) => {
  slides[i].style.opacity = 1;
  slides[i].classList.add("active_slide");
};

hideSlide();
showSlide(index);

const autoSlider = (i = 0) => {
  setInterval(() => {
    i++;
    if (i > slides.length - 1) {
      i = 0;
    }
    hideSlide();
    showSlide(i);
  }, 10000);
};

next.onclick = () => {
  index < slides.length - 1 ? index++ : (index = 0);
  hideSlide();
  showSlide(index);
};

prev.onclick = () => {
  index > 0 ? index-- : (index = slides.length - 1);
  hideSlide();
  showSlide(index);
};

autoSlider(index);
//////////////////

let sharinganSound = new Audio(
  "https://res.cloudinary.com/dcqggnzbv/video/upload/v1685970635/sharingan%20codepen/sharingan-sfx_iusmep.mp3"
);
sharinganSound.preload = "auto";

// set css variable sizes
const sharinganSize = 100;
const backgroundLength = sharinganSize * 7;
const finalPosition = -(backgroundLength - sharinganSize);

let root = document.documentElement;

// Set the new values
root.style.setProperty("--sharingan-size", sharinganSize + "px");
root.style.setProperty("--background-length", backgroundLength + "px");
root.style.setProperty("--final-position", finalPosition + "px");

const sharinganBackground = document.querySelector(".sharingan-background");
const sharinganContainer = document.querySelector(".sharingan-container");
const sharingan = document.getElementById("sharingan");

let isForwards = false;
let soundEnabled = false;

function toggleSharingan() {
  // Remove both classes to reset the animation
  sharinganBackground.classList.remove("sharingan-regular");
  sharinganBackground.classList.remove("sharingan-mangekyou");
  sharingan.classList.remove("sharingan-forwards");
  sharingan.classList.remove("sharingan-backwards");

  // Toggle between forwards and backwards
  if (isForwards) {
    sharingan.classList.add("sharingan-backwards");
    sharinganBackground.classList.add("sharingan-regular");
    if (soundEnabled) {
      // Stop the sound when going backwards
      sharinganSound.pause();
      sharinganSound.currentTime = 0;
    }
  } else {
    sharingan.classList.add("sharingan-forwards");
    sharinganBackground.classList.add("sharingan-mangekyou");
    if (soundEnabled) {
      sharinganSound.play();
    }
    canClick = false; // prevent further clicks until sound is done
  }

  // Flip the flag for next time
  isForwards = !isForwards;
}

sharinganContainer.addEventListener("click", function () {
  // only proceed if user can click
  toggleSharingan();
});

document.querySelector(".sound-toggle").addEventListener("click", function () {
  soundEnabled = !soundEnabled;
  this.classList.contains("disabled")
    ? this.classList.remove("disabled")
    : this.classList.add("disabled");
});
