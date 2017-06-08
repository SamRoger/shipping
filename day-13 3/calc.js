
var numbers = document.getElementsByClassName("num");
var calcInput = document.getElementsByClassName("calc-input")[0];
var enter = document.getElementsByClassName("enter")[0];
var operators = document.getElementsByClassName("operator");
var clear = document.getElementsByClassName("clear")[0];

var x;
var operator;

enter.addEventListener("click", function() {
     var y = calcInput.innerHTML;
     calculate(x, y, operator);
});

clear.addEventListener("click", function() {
    calcInput.innerHTML = "";
});

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(event) {
        console.log(event);
        calcInput.innerHTML += event.target.innerHTML;
    });
}

for (let k = 0; k < operators.length; k++) {
    operators[k].addEventListener("click", function(event) {
        
        x = parseInt(calcInput.innerHTML)
        calcInput.innerHTML = "";
        operator = event.target.innerHTML;
    });
}

function calculate(x, y, operator) {

    var x = parseInt(x);
    var y = parseInt(y);
    var result;

    if (operator === "+") {
        result = x + y;
    } else if (operator === "-") {
        result = x - y;
    } else if (operator === "x") {
        result = x * y;
    } else if (operator === "/") {
        result = x / y;
    }

    calcInput.innerHTML = result;
}