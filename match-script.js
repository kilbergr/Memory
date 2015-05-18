//match-script.js
function matchingGame(){
	var color = "blue";
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
	var matchArr = [];
	var clicked = 0;
/*click function consists of choosing a random color to assign the div
 adding that color to the frequency count
 determining if the other div clicked is of the same color
 logging as match if so, otherwise turning tiles back over
 */

 var setColor = function(){
 	for (var i = 0; i < divs.length; i++){	
 		divs[i].style.backgroundColor = color;
 		divs[i].addEventListener("click", function() {	
 			if (this.style.backgroundColor === "blue"){
	//generate random color choice
				var colorChoice = Math.floor(Math.random()*colorArr.length);
	//set color to random color
				color = colorArr[colorChoice];
				this.style.backgroundColor = color;
				console.log(this.style.backgroundColor);
				matchArr.push(colorArr[colorChoice]);
				freq[colorArr[colorChoice]] += 1;
				clicked += 1;
	//if that color has appeared twice, remove it from array
				if (freq[colorArr[colorChoice]] === 2) {
					colorArr.splice(colorChoice, 1);
					colorChoice = Math.floor(Math.random()*(colorArr.length - 1));
					}
				}
			//else this.style.backgroundColor = "blue";
			console.log(matchArr);
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


//Reset button
var reset = document.getElementById("reset");
reset.addEventListener("click", function(){
	matchingGame();
});

