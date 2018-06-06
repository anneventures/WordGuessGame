
//colours array
var colours = ["red", "indigo", "green"];


//randomly chooses a word from the colours array
var randomColour = colours[Math.floor(Math.random() * colours.length)];

var wins = 0; 

var userKeyArrRed = ["_", "_", "_"]; //array to store letters of 'red'
var userKeyArrIndigo = ["_", "_", "_", "_", "_", "_"]; //store letters of 'indigo'
var userKeyArrGreen = ["_", "_", "_","_","_"]; //store letters of 'green'

var userGuessPrev = []; //array to store keys entered by user
			
var lives = 7;


if (randomColour==="red") {
	document.querySelector("#word").innerHTML=userKeyArrRed;
} else if (randomColour==="indigo") {
	document.querySelector("#word").innerHTML=userKeyArrIndigo;
} else if (randomColour==="green") {
	document.querySelector("#word").innerHTML=userKeyArrGreen;
}			

function playAgain() {
    location.reload();
}

document.onkeyup = function(event) { 

	var userGuess = event.key; //detects the key that user guesses
	
	userGuessPrev.push(userGuess); //add the key in the userGuessPrev array

	//this function displays keys pressed and uses comma to separate each key
	function joinKeys() {
		document.querySelector("#keyPressed").innerHTML=userGuessPrev.join(", ");
	}

	//take out the correct letter from the userGuessPrev array
	function rightLetter() {
		userGuessPrev.pop(userGuess);
	}

	//this function is called after user successfully guesses the word; the function executes a coloured statement (string type)
	function correctGuess(s,c) {
		document.querySelector("#colourAppear").innerHTML = s; //statement
		document.querySelector("#colourAppear").style.color = c; //colour change
	}

	function redColour() {
		switch (userGuess) {
			case "r": 
				userKeyArrRed[0]="r"; 
				document.querySelector("#word").innerHTML=userKeyArrRed.join(" ");
				rightLetter();
				break;
			
			case "e":
				userKeyArrRed[1]="e"; 
				document.querySelector("#word").innerHTML=userKeyArrRed.join(" ");
				rightLetter();
				break;
			
			case "d":
				userKeyArrRed[2]="d"; 
				document.querySelector("#word").innerHTML=userKeyArrRed.join(" ");
				rightLetter();
				break;
			
			default:
				joinKeys();

		}//end switch
	} //end redColour()

	function indigoColour() {
		switch (userGuess) {
			case "i":
				userKeyArrIndigo[0]="i";
				userKeyArrIndigo[3]="i";
				document.querySelector("#word").innerHTML=userKeyArrIndigo.join(" ");
				rightLetter();
				break;
	
			case "n":
				userKeyArrIndigo[1]="n";
				document.querySelector("#word").innerHTML=userKeyArrIndigo.join(" ");
				rightLetter();
				break;
	
			case "d":
				userKeyArrIndigo[2]="d";
				document.querySelector("#word").innerHTML=userKeyArrIndigo.join(" ");
				rightLetter();
				break;
		
			case "g":
				userKeyArrIndigo[4]="g";
				document.querySelector("#word").innerHTML=userKeyArrIndigo.join(" ");
				rightLetter();
				break;
		
			case "o":
				userKeyArrIndigo[5]="o";
				document.querySelector("#word").innerHTML=userKeyArrIndigo.join(" ");
				rightLetter();
				break;														
		
			default:
				joinKeys();

		}//end switch
	} //end indigoColour()								

	function greenColour() {
		switch (userGuess) {
			case "g":
				userKeyArrGreen[0]="g";
				document.querySelector("#word").innerHTML=userKeyArrGreen.join(" ");
				rightLetter();
				break;
		
			case "r":
				userKeyArrGreen[1]="r";
				document.querySelector("#word").innerHTML=userKeyArrGreen.join(" ");
				rightLetter();
				break;
		
			case "e":
				userKeyArrGreen[2]="e";
				userKeyArrGreen[3]="e";
				document.querySelector("#word").innerHTML=userKeyArrGreen.join(" ");
				rightLetter();
				break;
				
			case "n":
				userKeyArrGreen[4]="n";
				document.querySelector("#word").innerHTML=userKeyArrGreen.join(" ");
				rightLetter();
				break;
		
			default:
				joinKeys();

		}//end switch
	} //end greenColour()
								

				
	if (randomColour==="red") {

		redColour();

		if (userKeyArrRed.includes("r") && userKeyArrRed.includes("e") && userKeyArrRed.includes("d")) {
			userKeyArrRed=["_", "_", "_"];
			wins++
			correctGuess("Yes! Red is the first colour of the rainbow.","red");				
			document.querySelector("#keyPressed").innerHTML=userGuessPrev=[]; //reset userGuessPrev array
			document.querySelector("#numGuesses").innerHTML = lives=7;
			randomColour = colours[Math.floor(Math.random() * colours.length)];
			if (randomColour==="red") {
				document.querySelector("#word").innerHTML=userKeyArrRed;
			} else if (randomColour==="indigo") {
				document.querySelector("#word").innerHTML=userKeyArrIndigo;
			} else if (randomColour==="green") {
				document.querySelector("#word").innerHTML=userKeyArrGreen;
			}

		} 

	}//end red if statement


	if (randomColour==="indigo") {						
		indigoColour();

		if (userKeyArrIndigo.includes("i") && userKeyArrIndigo.includes("n") && userKeyArrIndigo.includes("d") && userKeyArrIndigo.includes("g") && userKeyArrIndigo.includes("o")) {			
			userKeyArrIndigo=["_", "_", "_", "_", "_", "_"];		
			wins++
			correctGuess("Yes! Indigo is the sixth colour of the rainbow","#4b0082");
			document.querySelector("#keyPressed").innerHTML=userGuessPrev=[]; //reset userGuessPrev array
			document.querySelector("#numGuesses").innerHTML = lives=7;
			randomColour = colours[Math.floor(Math.random() * colours.length)];
			if (randomColour==="red") {
				document.querySelector("#word").innerHTML=userKeyArrRed;
			} else if (randomColour==="indigo") {
				document.querySelector("#word").innerHTML=userKeyArrIndigo;
			} else if (randomColour==="green") {
				document.querySelector("#word").innerHTML=userKeyArrGreen;
			}								
		}

	}//end indigo if statement

	
	if (randomColour==="green") {

		greenColour();

		if (userKeyArrGreen.includes("g") && userKeyArrGreen.includes("r") && userKeyArrGreen.includes("e") && userKeyArrGreen.includes("n")) {
			userKeyArrGreen=["_", "_", "_", "_", "_"];
			wins++							
			correctGuess("Yes! Green is the fourth colour of the rainbow","green");
			document.querySelector("#keyPressed").innerHTML=userGuessPrev=[]; //reset userGuessPrev array						
			document.querySelector("#numGuesses").innerHTML = lives=7;
			randomColour = colours[Math.floor(Math.random() * colours.length)];
			if (randomColour==="red") {
				document.querySelector("#word").innerHTML=userKeyArrRed;
			} else if (randomColour==="indigo") {
				document.querySelector("#word").innerHTML=userKeyArrIndigo;
			} else if (randomColour==="green") {
				document.querySelector("#word").innerHTML=userKeyArrGreen;
			}			
		}

	}//end green if statement

						
	document.querySelector("#wins").innerHTML=wins;

	var lengthUserGuess = userGuessPrev.length;

	if (lengthUserGuess === 1) {
		document.querySelector("#numGuesses").innerHTML = lives-1;
	}

	if (lengthUserGuess === 2) {
		document.querySelector("#numGuesses").innerHTML = lives-2;
	} 

	if (lengthUserGuess === 3) {
		document.querySelector("#numGuesses").innerHTML = lives-3;
	} 

	if (lengthUserGuess === 4) {
		document.querySelector("#numGuesses").innerHTML = lives-4;
	}

	if (lengthUserGuess === 5) {
		document.querySelector("#numGuesses").innerHTML = lives-5;
	}

	if (lengthUserGuess === 6) {
		document.querySelector("#numGuesses").innerHTML = lives-6;
	}

	if (lengthUserGuess === 7) {
		document.querySelector("#numGuesses").innerHTML = lives-7;
		alert("game over!");
		playAgain()
	}

} //end function		
