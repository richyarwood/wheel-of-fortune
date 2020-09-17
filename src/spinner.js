export default class Spinner {
  constructor (names) {
    this.names = names
  }

  createSpinner = (names) => {
    const spinner = document.querySelector(".spinner");

    let nameSpacing = 0;

    for (let i=0; i < names.length; i++) {
      const nameDiv = document.createElement('div');
      nameDiv.classList.add('name');
      nameDiv.setAttribute("style", `transform: rotate(${nameSpacing}deg)`)
      spinner.appendChild(nameDiv)
      nameDiv.innerText += names[i];

      nameSpacing = nameSpacing - 360 / names.length;
    }
  }
}