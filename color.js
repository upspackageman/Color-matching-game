
var numOfSquares=6;
var colors;
var squares=document.querySelectorAll(".square"); 
var picked; 
var colorDisplay=document.querySelector("#colorSelect");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");

init();


function init(){
	setupMode();
	setSquares();
	reset();
}

function setupMode(){
	for(var i=0; i<mode.length;i++){
		mode[i].addEventListener("click",function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numOfSquares=3:numOfSquares=6;
		
			reset();
		
		});
	
	}
	
}

function setSquares(){
	for(var i=0; i<squares.length;i++){
	//add click listener to squares"
	squares[i].addEventListener("click",function(){
		//get the clicked color
		var colorClick=this.style.background;
		//now compare
		if(colorClick===picked){
			//alert("CORRECT!!!");
			resetButton.textContent="Play Again";
			h1.style.background=colorClick;
			message.textContent="Correct"
			changeColors(colorClick);
		}else{
			//alert("WRONG!!!!");
			this.style.background="#232323";
			message.textContent="Try Again"
		}
	});
	}
	
}

function reset(){
	colors=generateRandomColors(numOfSquares); 
	//pick a new random color from array
	picked=colorSelected();
	//change colorDisplay to match picked Color
	colorDisplay.textContent=picked;
	resetButton.textContent="New Colors";	
	
	message.textContent="";
	//change colors of squares
	for(var i=0;i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.background="steelblue";
}




resetButton.addEventListener("click",function(){
	reset();
})



function changeColors(color){
//loop through the squares	
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function colorSelected(){
	
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//create array
	var arr=[]; 
	//add num random colors to array 
	for(var i=0; i<num;i++){
		//get random colors 
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a redd from 0 to 255
	var r=Math.floor(Math.random()*256);
	//pick bluee from 0 to 255
	var b=Math.floor(Math.random()*256);
	//pick green from 0 to 255
	var g=Math.floor(Math.random()*256);
	//rgb(r,b,g);
	return "rgb("+r+", "+g+", "+b+")";
	
}