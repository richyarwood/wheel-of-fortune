const createSpinner = (names) => {
  const spinner = document.querySelector(".spinner");

  let num = 0;

  for (let i=0; i < names.length; i++) {
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.setAttribute("style", `transform: rotate(${num}deg)`)
    spinner.appendChild(nameDiv)
    nameDiv.innerText += names[i];

    num = num - 360 / names.length;
  }
};

export { createSpinner };