const container=document.querySelector(".container");
const resetGrid=document.querySelector(".resetGrid");
createNewGrid();

function createNewGrid(gridSize=16){
    for(var i=0; i<gridSize*gridSize; i++){    
        container.innerHTML += '<div class="square"></div>';
    }
    let square=document.querySelectorAll('.square');
    for (var i = 0; i < square.length; i++) {
        square[i].style.width=800/gridSize+"px";
        square[i].style.height=800/gridSize+"px";
    }


    document.querySelectorAll('.square').forEach(function(item) {
    item.addEventListener('mouseover', function() {
    item.classList.add("addColor");
    });
});

}

resetGrid.addEventListener('click', () =>{
    
    let gridSize = prompt("What is the size of the new grid (max 100)?");
    if (gridSize<=0 || gridSize>100){
        return alert("This number is invalid. Try again");
    }
    else {
        container.innerHTML="";
        createNewGrid(gridSize);
        } 

});
