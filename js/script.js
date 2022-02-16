"use strict"

//==================================WITHOUT CLOSURE=========================================================================

let count = 0;
function increaseCounter() {
	count++;
	console.log(count);
}

/* increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
console.log(count) */


//==================================WITH CLOSURE=========================================================================
function createCounter(startingValue) {
	let count = startingValue;
	return () => {
		count++;
		console.log(count)
	}
};

let firstCounter = createCounter(5);
let secondCounter = createCounter(10);
let thirdCounter = createCounter(15);

firstCounter();
firstCounter();
firstCounter();

console.log('//=======================================')

secondCounter();

console.log('//=======================================')

thirdCounter();
thirdCounter();
thirdCounter();
thirdCounter();
thirdCounter();
thirdCounter();
thirdCounter();
thirdCounter();
thirdCounter();
thirdCounter();