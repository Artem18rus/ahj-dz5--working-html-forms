import InnPopoverWidget from './widget';

const container = document.querySelector('.container');
const popover = new InnPopoverWidget(container);

popover.bindToDOM();
