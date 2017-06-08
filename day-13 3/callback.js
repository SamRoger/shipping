redApples("three", eatApples);

function redApples(amount, callbackFunction) {
	console.log("I have " + amount + " red apples.");
	// console.log(callbackFunction);
	callbackFunction(amount, addApples);
}

function eatApples(num, otherCallbackFunction) {
	console.log("I ate " + num + " red apples.")
	otherCallbackFunction();
}

function addApples() {
	console.log("I'm gonna add some apples.");
}