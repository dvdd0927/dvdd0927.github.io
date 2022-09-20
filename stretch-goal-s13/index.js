let username, password, role;

function login() {
	username = prompt("Enter your username");
	password = prompt("Enter your password");
	role = prompt("Enter your role").toLowerCase();

	if (
		username === "" ||
		username === null ||
		password === "" ||
		password === null ||
		role === "" ||
		role === null
	) {
		alert("Input should not be empty!");
	} else {
		switch (role) {
			case "admin":
				alert("Welcome back to the class portal, admin!");
				break;
			case "teacher":
				alert("Thank you for logging in, teacher!");
				break;
			case "student":
				alert("Welcome to the class portal, student!");
				let grade1 = parseInt(prompt("Enter 1st Grading Period"));
				let grade2 = parseInt(prompt("Enter 2nd Grading Period"));
				let grade3 = parseInt(prompt("Enter 3rd Grading Period"));
				let grade4 = parseInt(prompt("Enter 4th Grading Period"));

				checkAverage(grade1, grade2, grade3, grade4);
				break;
			default:
				alert("Role out of range");
				break;
		}
	}
}

login();

function checkAverage(grade1, grade2, grade3, grade4) {
	const average = function() {
		let variable = Math.round((grade1 + grade2 + grade3 + grade4) / 4);
		return variable;
	};

	let resultAverage = average();

	if(resultAverage <= 74){
		console.log("Hello, student, your average is "+ resultAverage +". The letter equivalent is F");
	}else if(resultAverage >= 75 && resultAverage <= 79){
		console.log("Hello, student, your average is "+ resultAverage +". The letter equivalent is D");		
	}else if(resultAverage >= 80 && resultAverage <= 84){
		console.log("Hello, student, your average is "+ resultAverage +". The letter equivalent is C");		
	}else if(resultAverage >= 85 && resultAverage <= 89){
		console.log("Hello, student, your average is "+ resultAverage +". The letter equivalent is B");		
	}else if(resultAverage >= 90 && resultAverage <= 95){
		console.log("Hello, student, your average is "+ resultAverage +". The letter equivalent is A");		
	}else if(resultAverage >= 96){
		console.log("Hello, student, your average is "+ resultAverage +". The letter equivalent is A+");		
	}

}
