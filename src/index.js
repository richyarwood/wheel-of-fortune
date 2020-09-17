import Spinner from './spinner.js';

const params = new URLSearchParams(window.location.search);
const names = params.getAll('name'); // Get the names out of the url
const newSpinner = new Spinner();

newSpinner.createSpinner(names); // Set up a new spinner

const spinner = document.querySelector(".spinner");

let rotationValue = 0;
let started = false;
let time;

const rotateSpinner = () => {
  rotationValue++;
  spinner.setAttribute("style", `transform: rotate(${rotationValue}deg)`)
};

const spinIt = (speed, time) => {
  if (started) return // Make sure you can't keep starting it!!

  const spinInterval = setInterval(rotateSpinner, speed);
  started = true;

  setTimeout(() => {
    clearInterval(spinInterval);
    started = false;
    rotationValue = 0;
  }, time)
}

// Set up the start button and click listener
const startButton = document.querySelector(".button");

startButton.addEventListener('click', () => {
  time = Math.floor(Math.random() * 10000) + 3000;
  spinIt(2, time)
});
