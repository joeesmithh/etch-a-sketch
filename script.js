function changeColor(elem) {
    let o = parseFloat(elem.style.opacity);
    elem.style.opacity = `${o + 0.1}`;
}

// Body
let body = document.querySelector("body");

// Grid
let grid = document.createElement('div');
grid.setAttribute("class", "grid");

grid.addEventListener('mouseover', (e) => {
    changeColor(e.target);
})

// Squares
const grid_size = 16;
let square_count = grid_size * grid_size;
let square_size = 100 / grid_size;
for (let i = 0; i < square_count; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${square_size}%`;
    square.style.height = `${square_size}%`;
    square.style.opacity = 0;
    grid.appendChild(square);
}

// Add grid
body.appendChild(grid);

