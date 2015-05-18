//match-script.js
function matchingGame(){

	//The colors available in an array
	var colorArr = ["red", "lightblue", "green", "yellow", "pink", "limegreen", "rebeccapurple", "orange"];
	//How many times each color has appeared so far
	var freq = {
		"red": 0,
		"lightblue": 0,
		"green": 0,
		"yellow": 0,
		"pink": 0,
		"limegreen": 0,
		"rebeccapurple": 0,
		"orange":0 	
	};
	//make array like object of all the divs
	var divs = document.querySelectorAll(".board");
	var colorOrder = [];
	var matchArr = [];
	var clicked = 0;
	var color = "";
/*click function consists of choosing a random color to assign the div
 adding that color to the frequency count
 determining if the other div clicked is of the same color
 logging as match if so, otherwise turning tiles back over
 */

var randColor = function(){
for (var d = 0; d < 16; d++){
	var colorChoice = Math.floor(Math.random()*colorArr.length);
  	freq[colorArr[colorChoice]] += 1;
	colorOrder.push(colorArr[colorChoice]);
		if (freq[colorArr[colorChoice]] === 2) {
					colorArr.splice(colorChoice, 1);
					colorChoice = Math.floor(Math.random()*(colorArr.length - 1));
					}
			}
	};
randColor();

var setColor = function(){
 	for (var i = 0; i < divs.length; i++){
 		divs[i].style.backgroundColor = "blue";
 		color = divs[i].getAttribute("style", "backgroundColor");
 		//color and colorOrder[i] both work here.
 		divs[i].addEventListener("click", function() {	
 			if (this.style.backgroundColor === "blue"){
 				color = colorOrder[i];
 				this.style.backgroundColor = color;
 				matchArr.push(colorOrder[i]);
 				console.log(matchArr);
 				console.log(matchArr);
				clicked += 1;
				}

			if (matchArr.length === 2){
				if (matchArr[0] === matchArr[1]){
					alert("Match!");
					this.id = "Matched";
					var matchedTiles = document.getElementById("Matched");
					console.log(matchedTiles);
					while(matchedTiles[0]) {
						matchedTiles[0].divs.removeChild(matchedTiles[0]);
						}
					console.log(divs);
					}
					else {
						alert("Try again!");
						if(this.id !== "Matched"){
							for (var j = 0; j < divs.length; j++){
								divs[j].style.backgroundColor = "blue";
								}
						}
						
					}
					matchArr = [];
				}


 			})
		}
	} 
setColor();
}
matchingGame();

//Reset button
var reset = document.getElementById("reset");
reset.addEventListener("click", function(){
	matchingGame();
});

