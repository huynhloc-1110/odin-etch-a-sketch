const drawPanel = document.querySelector('#draw-panel');
let edge = 16;

for (let i = 0; i < edge*edge; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('grid-item');
  pixel.setAttribute('draggable', 'false');
  pixel.addEventListener('mousedown', draw);
  pixel.addEventListener('mouseover', draw);
  drawPanel.appendChild(pixel);
}

function draw(mouseEvent) {
  /**
   * because dragging and selecting is the default behaviors on
   * mousedown events, we needs to disable it first.
   */
  mouseEvent.preventDefault();
  if (mouseEvent.buttons == 1)
    this.style.backgroundColor = "black";
}