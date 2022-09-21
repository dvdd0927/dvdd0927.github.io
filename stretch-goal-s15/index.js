let studentList = [];

function addStudent(studentName) {
	studentList.push(studentName);
	console.log(studentName + " was added to the student's list");
}

function removeStudent(studentName) {
	let index = studentList
		.map(function (student) {
			return student.toLowerCase();
		})
		.indexOf(studentName.toLowerCase());

	if (index === -1) {
		console.log(studentName + " is not an enrollee");
		return;
	}

	console.log(studentList[index] + " was removed from the student's list.")
	studentList.splice(index, 1);
}

function countStudents() {
	console.log("There are a total of " + studentList.length + " students enrolled.");
}

function printStudents() {
	studentList.sort().forEach(function (student) {
		console.log(student);
	});
}

function findStudent(letter) {
	let filteredStudent = studentList.filter(function (student) {
		return student.toLowerCase().includes(letter.toLowerCase());
	});

	if (filteredStudent.length === 1) {
		console.log(filteredStudent[0] + " is an enrollee");
		return;
	}

	if (filteredStudent.length > 1) {
		console.log(filteredStudent.join(", ") + " are enrollees");
		return;
	}

	console.log(letter + " is not an enrollee");
}

function addSection(section) {
	let sectionList = studentList.map(function (student) {
		return student + " - section " + section;
	});
	console.log(sectionList);
}
