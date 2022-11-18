const displayOnClick = document.querySelector('.btn');
const hiddenOn = document.querySelector('.hidden');

export default class ClassClick {
  static displayOnClickMethod() {
    displayOnClick.onclick = () => {
      hiddenOn.classList.toggle('elem');
      displayOnClick.classList.toggle('borderColor');
    };
  }
}
ClassClick.displayOnClickMethod();
