// Activity A

const trainerAsh = {
	name: "Ash Ketchum",
	age: 10,
	pokemon: ["Pikachu", "Charizard", "Squirtle", "Bulbasaur"],
	friends: {
		hoenn: ["May", "Max"],
		kanto: ["Brock", "Misty"],
	},
	talk: function () {
		console.log(this.pokemon[0] + "! I choose you!");
	},
};

console.log(trainerAsh);

console.log("Result of dot notation");
console.log(trainerAsh.name);

console.log("Result of square bracket notation");
console.log(trainerAsh.pokemon);

console.log("Result of talk method");
trainerAsh.talk();

function Pokemon(name, level, health, attack) {
	this.name = name;
	this.level = level;
	this.health = health;
	this.attack = attack;
	this.tackle = function (targetPokemon) {
		console.log(this.name + " tackled " + targetPokemon.name);
		let targetHealth = targetPokemon.health - this.attack;
		targetPokemon.health = targetHealth;
		if (targetHealth <= 0) {
			console.log(
				targetPokemon.name +
					"'s health is now reduced to " +
					targetHealth
			);
			this.faint(targetPokemon);
			return;
		}

		console.log(
			targetPokemon.name + "'s health is now reduced to " + targetHealth
		);
	};
	this.faint = function (targetPokemon) {
		console.log(targetPokemon.name + " has fainted.");
	};
}

const pikachu = new Pokemon("Pikacu", 12, 24, 12);
const geodude = new Pokemon("Geodude", 8, 16, 8);
const mewtwo = new Pokemon("Mewtwo", 100, 200, 100);

console.log(pikachu);
console.log(geodude);
console.log(mewtwo);

geodude.tackle(pikachu);
console.log(pikachu);

mewtwo.tackle(geodude);
console.log(geodude);