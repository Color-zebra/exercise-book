"use strict"

//===========================================================================================================
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let array = [ vasya, petya, masha ];

function sortByAge(arr) {
	let arrCopy = arr.slice(0);
	return arrCopy.sort((a, b) => a.age - b.age);
};

let sortedArr = sortByAge(array);

console.log(array);
console.log(sortedArr)

// теперь: [vasya, masha, petya]
console.log(sortedArr[0].name); // Вася
console.log(sortedArr[1].name); // Маша
console.log(sortedArr[2].name); // Петя


//===========================================================================================================
function averageAge(arr) {
	return arr.reduce((sum, item) => (sum + item.age), 0)/arr.length;
}

console.log(averageAge(array));


//===========================================================================================================
function unique(arr) {
	let result = [];
	arr.forEach(item => result.includes(item) ? '' : result.push(item))
	return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O


//===========================================================================================================
let arr = [1, 2, 3];

function shuffle(arr) {
	let result = arr.slice(0);
	return result.sort((a, b) => (Math.random()-0.5))
}

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
