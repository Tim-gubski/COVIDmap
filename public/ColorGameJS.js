var colorsNum = 6
var colors = generateColors(colorsNum)
var squares = document.querySelectorAll(".square")
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var header = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")   

var pickedColor = pickColor(colors)

colorDisplay.textContent = pickedColor

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    colorsNum = 3
    reset()
})
hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    colorsNum = 6
    reset()
})

resetButton.addEventListener("click",function(){
    reset()
})

for (var i = 0; i<colorsNum;i++){
    //asign random colors to squares
    squares[i].style.backgroundColor = colors[i]
    //add event listeners
    squares[i].addEventListener("click",function(){
        //compare clicked color to selected color
        if (this.style.backgroundColor == pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(pickedColor)
            resetButton.textContent = "Play Again?"
        }else{
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again"
        }
    })
}

//make all colors picked color
function changeColors(color){
    for (var i = 0; i<colorsNum;i++){
        squares[i].style.backgroundColor = color
    }
    header.style.backgroundColor = color
}

//pick random color from array
function pickColor(array){
    return array[Math.floor(Math.random()*array.length)]
}

//make random colors array
function generateColors(num){
    arr = []
    for (i=0;i<num;i++){
        arr.push(randomColor())
    }
    return arr
}

//make one random color RGB
function randomColor(){
    r = Math.floor(Math.random()*256)
    g = Math.floor(Math.random()*256)
    b = Math.floor(Math.random()*256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

function reset(){
    for (var i = 0; i<squares.length;i++){
        squares[i].style.backgroundColor = "#232323"
    }
    //generate new colors
    colors = generateColors(colorsNum)
    //pick a new pickedColor
    pickedColor = pickColor(colors)
    //change header for new color
    colorDisplay.textContent = pickedColor
    //reset elements
    header.style.backgroundColor = null
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = ""
    //change colors of squares
    for (var i = 0; i<colorsNum;i++){
        squares[i].style.backgroundColor = colors[i]
    }
}