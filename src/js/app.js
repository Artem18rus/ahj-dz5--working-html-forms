const displayOnClick = document.querySelector('.btn');
const hiddenOn = document.querySelector('.hidden');

displayOnClick.onclick = function f() {
  hiddenOn.classList.toggle('elem');
  displayOnClick.classList.toggle('borderColor');
};
