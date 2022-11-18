import ClassClick from '../app';
// import displayOnClick from '../app';
// import hiddenOn from '../app';

test('widget', () => {
  document.body.innerHTML = '<div class="container"></div>';

  //const container = document.querySelector('.container');
  const widget = ClassClick.displayOnClickMethod();

  widget.bindToDOM();
  widget.displayOnClick.click();

  expect(widget.container.classList.contains('hidden')).toEqual(true);
});
