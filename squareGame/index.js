const container = document.getElementById('container');
let min_num_cells = 1;
let num_colors = 4;
let init_cells = 20;
let idInterval;
const scoreSpan = document.getElementById('score');
const cellNumbersSpan = document.getElementById('cellNumbers');
function createCell() {
  const cell =document.createElement('div');
  cell.classList.add('cell');
  let randomColor = Math.floor(Math.random() * num_colors) +1;
  cell.classList.add('color' + randomColor)
  cell.setAttribute('onclick', 'removeCell(this)');
  container.append(cell);
  refreshCellNumbers();
}

function removeCell(cell) {
  let rangeCells = [cell];
  let color = cell.classList[1];
  let nextCell = cell.nextElementSibling;
  while (nextCell && nextCell.classList[1] === color) {
    rangeCells.push(nextCell);
    nextCell = nextCell.nextElementSibling;
  }

  let prevCell = cell.previousElementSibling;
  while (prevCell !=null && prevCell.classList[1] === color) {
    rangeCells.push(prevCell);
    prevCell = prevCell.previousElementSibling;
  }

  if(rangeCells.length >= min_num_cells){
    scoreSpan.textContent = parseInt(scoreSpan.textContent) + rangeCells.length;
    rangeCells.forEach(cell => cell.remove());
  }
  if(container.children.length === 0) {
    clearInterval(idInterval);
    setTimeout(()=>container.innerHTML = '<h1>GANASTE</h1>', 500);
  }

  // rangeCells.forEach(cell => cell.remove());
  refreshCellNumbers();
}

function refreshCellNumbers(){
  cellNumbersSpan.textContent = container.children.length;
}

function startGame() {
  container.textContent = '';
  scoreSpan.textContent = 0;
  for (let i = 0; i < init_cells; i++) {
    createCell();
  }
  idInterval = setInterval(createCell, 2000)
}


