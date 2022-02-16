const container = document.querySelector('#container');
let createGrid = (x) => {
    for(let i = 0; i<x; i++){
        for(let j = 0; j<x; j++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            
            grid.style.width = `${800/x}px`;
            grid.style.height = `${800/x}px`;
            container.appendChild(grid);
            container.style.setProperty('--grid-rows', x);
            container.style.setProperty('--grid-cols', x);

        }
    }
}
let x = prompt("Enter size of grid");
createGrid(x);
const square = document.querySelectorAll('.grid');
square.forEach(element => element.addEventListener("mouseover", function(){
    element.classList.add('colored');
    }))

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    square.forEach(element => element.classList.remove('colored'));
})
