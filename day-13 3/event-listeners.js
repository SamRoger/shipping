
// function addChoiceListeners() {
// 	var choices = document.getElementsByClassName("choice");
	
// 	for (let i = 0; i < choices.length; i++) {
// 		choices[i].addEventListener("click", function(event) {
// 			event.target.innerHTML = i + " was clicked!";
// 		});
// 	}
// }

function addChoiceListeners() {
	var choices = document.getElementsByClassName("choice");
	
	for (let i = 0; i < choices.length; i++) {
		choices[i].addEventListener("click", wasClicked);
	}
}


function wasClicked(event) {
	event.target.innerHTML = "I was clicked!";
}

addChoiceListeners();








// var btn1 = document.getElementsByClassName("choice")[0];
// var btn2 = document.getElementsByClassName("choice")[1];
// var btn3 = document.getElementsByClassName("choice")[2];

// btn1.addEventListener("click", function() {
// 	alert("i was clicked! I am the first button.")
// })

// btn2.addEventListener("click", function() {
// 	alert("i was clicked! I am the second button.")
// })

// btn3.addEventListener("click", function() {
// 	alert("i was clicked! I am the third button.")
// })