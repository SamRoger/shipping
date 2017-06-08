


var craving;

function getFood(craving, mood, stomach) {

	var stringToBeReturned;

	if (craving === "sweet" && stomach === "empty") {
		stringToBeReturned = "Get some ice cream.";
	} else if (craving === "savory" && stomach === "empty") {
		stringToBeReturned = "Get some tempeh bacon.";
	} else {
		stringToBeReturned = "I'm not hungry";
	}

	return stringToBeReturned;
}


function setMyCraving() {
	myCraving = "sweet";
}

// setCraving();


// var names = ["chris", "kostas", "oggi"];


// function allNames() {

// 	var nameString = "";
// 	for (var i = 0; i < names.length; i++) {
// 		nameString += names[i] + ", ";
// 	}
// 	return nameString;
// }






