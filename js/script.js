"use strict"

function randomInteger(min, max) {
	return Math.floor(Math.random()*(max+1-min) + min);
}

console.log(randomInteger(1, 10));
console.log(randomInteger(-100, 1));
console.log(randomInteger(0, 1));
console.log(randomInteger(1, 3));