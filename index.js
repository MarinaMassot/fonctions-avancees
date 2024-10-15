// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

const people = [
	"JoHn",
	"ChrISTiana",
	"anThoNY",
	"MARia",
	"jaMeS",
	"MIChaEl",
	"jeNNIFeR",
];

const capitalizeFirstName = function (firstName) {
	const firstNameLowerCase = firstName.toLowerCase();
	const firstNameCapitalize =
		firstNameLowerCase.charAt(0).toUpperCase() + firstNameLowerCase.slice(1);

	return firstNameCapitalize;
};

capitalizePeople = function (myPeople, callback) {
	const peopleCapitalized = [];
	for (firstName of myPeople) {
		peopleCapitalized.push(callback(firstName));
	}

	return peopleCapitalized;
};

console.log(capitalizePeople(people, capitalizeFirstName));
