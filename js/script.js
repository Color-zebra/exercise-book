"use strict"


/* function Calculator() {
	this.calculate = function(str) {
		let arr = str.split(' ');
		console.log(arr);
		let firstNumber = arr[0];
		let secondNumber = arr[2];
		let operator = arr[1];
		console.log(firstNumber, secondNumber, operator);
		switch(operator) {
			case '+':
				return +firstNumber + +secondNumber;
			case '-':
				return +firstNumber - +secondNumber;
		};
	};
	this.addMethod = function(name, func) {

	}
} */

//ХЕРНЯ! Работает, но хер знает как расширить.

function Calculator() {
	this.methods = {
		'+':((a, b) => a + b),
		'-':((a, b) => a - b),
	}
	this.calculate = function(str) {
		let first = +str.split(' ')[0];
		let second = +str.split(' ')[2];
		let operator = str.split(' ')[1];
		if ( !(this.methods[operator] && isFinite(first) && isFinite(second))) {
			return 'Uncorrect insert'
		}
		return this.methods[operator](first, second);
	};
	this.addMethod = function(name, func) {
		this.methods[name] = func
	};
}

let test = new Calculator();
console.log(test);

console.log(test.calculate( '2 + 3')); //5
console.log(test.calculate( '10 - 8')); //2
console.log(test.calculate( '7 - 20')); //-13


test.addMethod('*', (a, b) => a * b);
test.addMethod('/', (a, b) => a / b);
test.addMethod(`**`, (a, b) => a ** b);
console.log(test);

console.log(test.calculate( '10 / 5')); //2
console.log(test.calculate( '10 * 8')); //80
console.log(test.calculate( '2 ** 3')); //8


console.log(test.calculate( 'помидор / апельсин')); //2
console.log(test.calculate( 'синее * 8')); //80
console.log(test.calculate( 'Infinity ** 3')); //8
console.log(test.calculate( '3 % 3')); //8


//===========================================================================================================
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

function namesArr(arr) {
	let result = [];
	for (let item of arr) {
		result.push(item.name)
	}
	return result;
}

function namesArrAnother(arr) {
	return arr.map(item => item.name);
}

let names = namesArr(users);
let namesAnother = namesArrAnother(users);

console.log( names ); // Вася, Петя, Маша
console.log( users );
console.log( namesAnother ); // Вася, Петя, Маша


//===========================================================================================================