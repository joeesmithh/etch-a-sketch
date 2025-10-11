let mode = 'etch';
let mouse_down = 0;
let strength = 15;

function darken(elem) {
    let darkness = Math.abs(
        parseInt(elem.style.backgroundColor.
            split(/[rgb\(\), ]/).at(4)) - strength);
    elem.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
}

function draw(event) {
    if (mouse_down === 0)
        return;

    switch (mode) {
        case 'etch':
            darken(event.target);
            break;
        default:
            break;
    }
}

// Body
let body = document.querySelector("body");

// Grid
let grid = document.createElement('div');
grid.setAttribute("class", "grid");
grid.onmousedown = (e) => { mouse_down = 1; draw(e) };
grid.onmouseup = () => mouse_down = 0;
grid.onmouseleave = () => mouse_down = 0;
grid.onmouseover = draw; // Try draw
grid.ondragstart = (e) => e.preventDefault(); // Prevent drag validation

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

