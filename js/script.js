"use strict"


function camelize(str) {
	if (str) return str
	.split('-')
	.map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1))
	.join('');
	return str;
}

console.log(camelize('на-золотом-крыльце-сидели'));
console.log(camelize(''));


//------------------------------------------------------------------------------------------------------------------
function filterRange(arr, a, b) {
	return arr.filter((item) => item >= a && item <= b);
};

let arrrr = [5, 3, 8, 1];
let filtered = filterRange(arrrr, 1, 4);
console.log(arrrr);
console.log(filtered);


//------------------------------------------------------------------------------------------------------------------
function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
		};
	};
}

let array = [5, 3, 8, 1, 2, 3, 6, 7, 8];
console.log(array);
filterRangeInPlace(array, 3, 8);
console.log(array);


//------------------------------------------------------------------------------------------------------------------
function sortFromMaxToMin(arr) {
	return arr.sort((a,b) => b-a)
}

console.log(sortFromMaxToMin(array))


//------------------------------------------------------------------------------------------------------------------
function copySorted(arr) {
	return arr.slice().sort()
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)