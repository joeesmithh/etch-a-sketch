let mode = 'etch';
let strength = 15;

function darken(elem) {
    let darkness = Math.abs(
        parseInt(elem.style.backgroundColor.
            split(/[rgb\(\), ]/).at(4)) - strength);
    elem.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
}

// Body
let body = document.querySelector("body");

// Grid
let grid = document.createElement('div');
grid.setAttribute("class", "grid");

grid.addEventListener('mouseover', (e) => {
    switch (mode) {
        case 'etch':
            darken(e.target);
            break;

        default:
            break;
    }
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
    square.style.backgroundColor = `rgb(255, 255, 255)`;
    grid.appendChild(square);
}

// Add grid
body.appendChild(grid);

