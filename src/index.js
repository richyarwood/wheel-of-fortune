import Spinner from './spinner.js';
const params = new URLSearchParams(window.location.search);
const names = params.getAll('name');

const newSpinner = new Spinner();

newSpinner.createSpinner(names);

const spinner = document.querySelector(".spinner");
let rotationValue = 0;
let started = false;

let time;

const rotateSpinner = () => {
  rotationValue++;
  spinner.setAttribute("style", `transform: rotate(${rotationValue}deg)`)
};

const spinIt = (speed, time) => {
  if (started) return

  const fastInterval = setInterval(rotateSpinner, speed);
  started = true;

  setTimeout(() => {
    clearInterval(fastInterval);
    started = false;
    rotationValue = 0;
  }, time)
}

const startButton = document.querySelector(".button");
startButton.addEventListener('click', () => {
  time = Math.floor(Math.random() * 10000) + 3000;
  spinIt(2, time)
});
