let username, password, role;

function login() {
	username = prompt("Enter your username");
	password = prompt("Enter your password");
	role = prompt("Enter your role");

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
			case "admin":
				alert("Welcome to the class portal, student!");
				break;
			default:
				alert("Role out of range");
				break;
		}
	}
}

function checkAverage(grade1, grade2, grade3, grade4) {
	let average = calculateAverage();

	average = Math.round(average);

	if(average <= 74){
		console.log("Hello, student, your average is "+ average +". The letter equivalent is F");
	}else if(average >= 75 && average <= 79){
		console.log("Hello, student, your average is "+ average +". The letter equivalent is D");		
	}else if(average >= 80 && average <= 84){
		console.log("Hello, student, your average is "+ average +". The letter equivalent is C");		
	}else if(average >= 85 && average <= 89){
		console.log("Hello, student, your average is "+ average +". The letter equivalent is B");		
	}else if(average >= 90 && average <= 95){
		console.log("Hello, student, your average is "+ average +". The letter equivalent is A");		
	}else if(average >= 96){
		console.log("Hello, student, your average is "+ average +". The letter equivalent is A+");		
	}

	function calculateAverage() {
		return (grade1 + grade2 + grade3 + grade4) / 4;
	}
}
