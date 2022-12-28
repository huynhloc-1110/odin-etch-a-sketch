const drawPanel = document.querySelector('#draw-panel');
let pixels;
generateGrid(16);

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', clear);

const btnNewPanel = document.querySelector('#btn-new-panel');
btnNewPanel.addEventListener('click', generateNewGrid);

function generateGrid(edgePixel) {
  pixels = [];
  for (let i = 0; i < edgePixel*edgePixel; i++) {
    const pixel = document.createElement('div');
    pixels.push(pixel);
    pixel.classList.add('grid-item');
    pixel.setAttribute('draggable', 'false');
    pixel.addEventListener('mousedown', draw);
    pixel.addEventListener('mouseover', draw);
    drawPanel.appendChild(pixel);
  }
}

function draw(mouseEvent) {
  /**
   * Because dragging and selecting is the default behaviors on mousedown
   * events, we needs to disable it first.
   */
  mouseEvent.preventDefault();

  /**
   * This is for mouseover event when the user hold the mouse through the pixel.
   */
  if (mouseEvent.buttons == 1)
    this.style.backgroundColor = "black";
}

function clear(event) {
  for (const pixel of pixels) {
    pixel.removeAttribute('style');
  }
}

function generateNewGrid() {
  /**
   * Input and validate edge pixel, return if edge pixel > 100
   * because 100x100 div will cause lagging.
   */
  let edgePixel = prompt("Enter n as edge pixel" +
    " (this action will generate new n x n panel):");
  if (edgePixel > 100) {
    alert("n is over 100!");
    return;
  }
  
  /**
   * Delete the old grid, set css for new grid, generate new grid.
   * There is another way to set the grid columns and rows for the new grid;
   * however, it uses css var, which I haven't known yet.
   */
  drawPanel.innerHTML = "";
  drawPanel.style.setProperty('grid-template-columns',
    `repeat(${edgePixel}, 1fr)`);
  drawPanel.style.setProperty('grid-template-rows',
    `repeat(${edgePixel}, 1fr)`);
  generateGrid(edgePixel);
}