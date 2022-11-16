const displayOnClick = document.querySelector('.btn');
const hiddenOn = document.querySelector('.hidden');

function funcClick() {
  hiddenOn.classList.toggle('elem');
  displayOnClick.classList.toggle('borderColor');
}

displayOnClick.onclick = funcClick;
