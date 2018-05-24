var numSquares = 6;
var colors = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	setupModeBtn();
	setupSquare();
	reset()
}

function setupModeBtn(){
	for(var i =0; i < modeBtn.length;i++){
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares =3: numSquares =6;
			reset();
		});
	}
}

function setupSquare(){
	for(var i=0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickColor = this.style.backgroundColor;
			if (clickColor === pickedColor){
			   messageDisplay.textContent = "Correct!";
			   resetButton.textContent = "Play Again?";
			   changeColors(clickColor);
			   h1.style.backgroundColor = clickColor;
			} else {
				this.style.backgroundColor ="#232323" ;
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
	for(var i=0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
    for(var i = 0; i < num; i++){
    arr.push(randomColor());
    }
	return arr;
}

function randomColor(){
	var red =Math.floor(Math.random() * 256);
	var green =Math.floor(Math.random() * 256);
	var blue =Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

