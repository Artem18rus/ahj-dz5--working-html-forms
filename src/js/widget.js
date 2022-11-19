//console.log('sdfsdfsdf')

export class InnPopoverWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onClick = this.onClick.bind(this);
  }

  static get markup() {
    return `
      <div class="block">
      <button type="button" class="btn">Click to toggle popover</button> <!-- видимый элемент -->
      <div class="hidden elem">
        <div class="content">
          <div class="title">Popover title</div>
          <div class="slogan">And here's some amazing content. It's very engaging. Right?</div>
        </div>
      </div>
      </div>
    `;
  }

  static get selector() {
    return '.block';
  }

  bindToDOM() {
    this.parentEl.innerHTML = InnPopoverWidget.markup;
    this.element = this.parentEl.querySelector(InnPopoverWidget.selector);

    this.element.addEventListener('click', this.onClick);
  }

  onClick(e) {
    e.preventDefault();

    const displayOnClick = document.querySelector('.btn');
    const hiddenOn = document.querySelector('.hidden');

    hiddenOn.classList.toggle('elem');
    displayOnClick.classList.toggle('borderColor');
  }

}