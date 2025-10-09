function changeColor(elem) {
    let o = parseFloat(elem.style.opacity);
    elem.style.opacity = `${o + 0.1}`;
}

// Body
let body = document.querySelector("body");
body.setAttribute("style", `
    width: 45%;
    height: 100vh;
    margin: auto; 
    align-content: center;      
`);

// Grid
let grid = document.createElement('div');
grid.setAttribute("class", "grid");
grid.setAttribute("style", `
    width: 100%;
    aspect-ratio: 1 / 1;
    border-style: solid;
    border-width: 1px;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`);

grid.addEventListener('mouseover', (e) => {
    changeColor(e.target);
})

// Squares
const grid_size = 16;
let square_count = grid_size * grid_size;
let square_size = 100 / grid_size;
for (let i = 0; i < square_count; i++) {
    let square = document.createElement('div');
    square.setAttribute(`id`, `square${i}`);
    square.setAttribute("style", `
        width: ${square_size}%;
        height: ${square_size}%;
        background-color: black;
        opacity: 0;
    `);

    // square.addEventListener('mouseenter', (e) => {
    //     changeColor(e.target);
    // });

    grid.appendChild(square);
}

// Add grid
body.appendChild(grid);

