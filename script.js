// Body
let body = document.querySelector("body");
body.setAttribute("style",  `
    width: 45%;
    height: 100vh;
    margin: auto; 
    align-content: center;    
    justify-content: center;    
    align-items: center;
    align: center;
`);

// Grid
let grid = document.createElement('div');
grid.setAttribute("class", "grid");
grid.setAttribute("style", `
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`);

// Squares
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.setAttribute("class", "square");
    square.setAttribute("style", `
        width: 6.25%;
        height: 6.25%;
        border-style: solid;
        border-color: black;
        border-width: 1px;
    `);
    grid.appendChild(square);

}

// Add grid
body.appendChild(grid);

