// const displayOnClick = document.querySelector('.btn');
// const hiddenOn = document.querySelector('.hidden');

// class ClassClick {
//   static displayOnClickMethod() {
//     displayOnClick.onclick = () => {
//       hiddenOn.classList.toggle('elem');
//       displayOnClick.classList.toggle('borderColor');
//     };
//   }
// }
// ClassClick.displayOnClickMethod();

import { InnPopoverWidget } from "./widget";

const container = document.querySelector('.container');
const popover = new InnPopoverWidget(container);

popover.bindToDOM();