// get cube
const getCube = (number) => number ** 3;
let num = 2;
console.log(`The cube of ${num} is ${getCube(num)}`);

// address
const address = ["Dagupan city", "Pangasinan", "Philippines"];
const [city, province, country] = address;

console.log(`Complete Address: ${city}, ${province}, ${country}`);

// animal
const animal = {
	name: "Ban",
	specie: "Canine",
	breed: "Aspin",
};

const { name, specie, breed } = animal;
console.log(`My pet name is ${name} his breed was ${breed} belongs to ${specie} specie.`);

// number array
const numArray = [5, 6, 7, 8, 9, 10];
numArray.forEach(num => console.log(num))

// reduce number
const reduceNumber = numArray.reduce((x, y) => x + y);
console.log(reduceNumber);

// class
class Dog{
	constructor(name, age, breed){
		this.name = name;
		this.age = age;
		this.breed = breed;
	}
}

const myOtherPet = new Dog("Yuri", 1, "Husky")
console.log(myOtherPet);