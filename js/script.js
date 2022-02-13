"use strict"

function arrayBaseOperation() {
	let styles = [
		'Джаз', 'Блюз',
	]
	console.log(styles);

	styles.push('Рок-н-ролл');
	console.log(styles);

	styles[Math.floor(styles.length/2)] = 'Классика';
	console.log(styles);

	let deleted = styles.shift();
	console.log(deleted);

	styles.unshift('Рэп', "Рэгги");
	console.log(styles);
}

//arrayBaseOperation();


//-----------------------------------------------------------------------------------------------
function sumEndlessInput() {
	let arr = [];
	let current = prompt('Insert number','');

	while (isFinite(current) && current) {
		arr.push(+current);
		current = prompt('Insert number','');
	};

	let result = 0;
	for (let item of arr) {
		result += item;
	};

	return result;
}

//console.log(sumEndlessInput());


//-----------------------------------------------------------------------------------------------
function getMaxSubSum(arr) {
	let max = 0;
	let current = 0;
	for (let item of arr) {
		current += item;
		if (current > max) {
			max = current;
		} else if (current < 0) {
			current = 0;
		}
	}
	return max;
}

getMaxSubSum([-1, 2, 3, -9]) //5
getMaxSubSum([2, -1, 2, 3, -9]) //6
getMaxSubSum([-1, 2, 3, -9, 11]) //11
getMaxSubSum([-2, -1, 1, 2]) //3
getMaxSubSum([100, -9, 2, -3, 5]) //100
getMaxSubSum([1, 2, 3]) //6