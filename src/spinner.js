export default class Spinner {
  constructor (names) {
    this.names = names
  }

  createSpinner = (names) => {
    const spinner = document.querySelector('.spinner');

    let nameSpacing = 0;

    for (let i=0; i < names.length; i++) {
      const nameDiv = document.createElement('div');
      nameDiv.classList.add('name');
      nameDiv.setAttribute('style', `transform: rotate(${nameSpacing}deg)`)
      spinner.appendChild(nameDiv)
      nameDiv.innerText += names[i];

      nameSpacing = nameSpacing - 360 / names.length;
    }
  }

  createBulbs = () => {
    const spinner = document.querySelector('.spinner');
    const numberOfBulbs = 30;

    let bulbRotate = 0;

    for (let i=0; i < numberOfBulbs; i++) {
      const bulbContainer = document.createElement('div');
      const bulb = document.createElement('div');
      bulbContainer.classList.add('bulb-container');
      bulb.classList.add('bulb');
      bulb.setAttribute('style', `transform: rotate(${bulbRotate}deg) translateX(-222px)`);
      bulbContainer.appendChild(bulb)
      spinner.appendChild(bulbContainer);

      bulbRotate = bulbRotate - (360 / numberOfBulbs);
    }
  }
}