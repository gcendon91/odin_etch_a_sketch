const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");

const newBtn = document.getElementById("new");

const resetBtn = document.getElementById("reset");

const rainbowBtn = document.getElementById("rainbow");

defaultGrid();
//Creates a default grid sized 16x16 
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
    setColor();
};

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function makeColumns(cellNum) {
    let cellSize =  container.clientHeight/cellNum;    

    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.style.height = `${cellSize}px`;
            newCell.style.width = `${cellSize}px`;
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};
//Adds default color when mouse over
function setColor(){
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
    });
};
//Adds rainbow color when mouse over
function setRainbowColor(){
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            cell.style.backgroundColor = "#" + randomColor;
        });
    });
};

//reset button event Listener

resetBtn.onclick = function(){ 
    document
          .querySelectorAll(".gridRow")
          .forEach((e) => e.parentNode.removeChild(e)); 
    defaultGrid();
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            setColor();
        });
    });

};

//new grid button event Listener
newBtn.onclick = function(){ 
    customGrid();
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            setColor();
        });
    });

};

//rainbow button event Listener
rainbowBtn.onclick = function(){ 
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            setRainbowColor();
        });
    });

};


//create custom Grid function
function customGrid() {
    let size = prompt("Choose your grid size (max 100)");

    while (!/^[0-9]+$/.test(size)) {
        alert("You did not enter a number.");
        size = prompt("Choose your grid size (max 100)");
    }
        document
          .querySelectorAll(".gridRow")
          .forEach((e) => e.parentNode.removeChild(e)); 

    makeRows(size);
    makeColumns(size);
};

