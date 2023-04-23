let result = document.getElementById('result');
/*The getElementById() method returns an element with a specified value, the method returns null if the element does not exist,
is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.*/

function insertValue(value) {
	result.value = result.value + value;
}

function clearResult() {
	result.value = '';
}

function deleteVal() {
	result.value = result.value.slice(0, -1);
}

function calculate() {
	result.value = eval(result.value);
}
/*The eval() function evaluates JavaScript code represented as a string and returns its completion value*/