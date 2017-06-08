var numbers = document.getElementsByClassName("num");
var calcInput = document.getElementsByClassName("calc-input")[0];
var plus = document.getElementById("plus");
var two = document.getElementById("two").innerHTML;
var inputValue = document.getElementById("inputValue");
var clear = document.getElementById("clear");

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(event) {
		calcInput.innerHTML += event.target.innerHTML;
	});
}


var operator;

function calculate(x, y, operator) {

}

//1 has been clicked
plus.addEventListener("click", sumMath)
	

function sumMath() {
	 result = parseInt(inputValue.innerHTML) + parseInt(one);
}

function equal() {
	document.getElementById("equal").addEventListener("click", function(){
		inputValue.innerHTML = (result)
	})
}

// clear.addEventListener("click", function(){
// 		inputValue.empty();
// 	})