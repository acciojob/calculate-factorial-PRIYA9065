//your JS code here. If required.

function factorial(){
	let fact = 1;
	for(let i = 1; i <= number; i++){
		fact = fact * i;
	}
	alert("The factorial of "+ number + " is " + fact);
}
const number = prompt("Enter the number whose factorial to be calculated: ");
factorial(number);

