// 1.
let numInput = Number(prompt("Enter a number"));
console.log("The number you provided is " + numInput);

for(let i = numInput; numInput >= 0; i--){
	if(i <= 50){
		console.log("The current value is at 50. Terminating the loop.");
		break;
	}

	if(i % 10 === 0){
		console.log("The number is divisible by 10. Skipping the number");
		continue;
	}

	if(i % 5 === 0){
		console.log(i);
	}
}

// 2.

let word = "supercalifragilisticexpialidocious";

let consonants = "";

for(let i = 0; i < word.length; i++){
	if (
		word[i].toLowerCase() === "a" ||
		word[i].toLowerCase() === "e" ||
		word[i].toLowerCase() === "i" ||
		word[i].toLowerCase() === "o" ||
		word[i].toLowerCase() === "u"
	) {
		continue;
	} else{
		consonants += word[i];
	}
}

console.log(word);
console.log(consonants);