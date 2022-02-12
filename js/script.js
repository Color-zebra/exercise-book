"use strict"

function randomNumber(min, max) {
	return Math.random()*(max-min) + min;
}

console.log(randomNumber(1, 10));
console.log(randomNumber(-100, 1));
console.log(randomNumber(0, 1));