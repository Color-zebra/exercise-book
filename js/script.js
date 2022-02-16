"use strict"

//==================================MAP=========================================================================

// Как и обычный объект это коллекция пар КЛЮЧ - ЗНАЧЕНИЕ. 
// Основное отличие в том, что КЛЮЧОМ МОЖЕТ БЫТЬ НЕ ТОЛЬКО СТРОКА.
// К примеру число, булево значения, или даже другой объект.

//==================================SET=========================================================================

// Это особая коллекция, без ключей, только значения.
// Особенность в том, что set ХРАНИТ ТОЛЬКО УНИКАЛЬНЫЕ ЗНАЧЕНИЯ.
// При попытке записать в него уже существующее значени, оно не запишется.


//==============================================================================================================
function unique(arr) {
	return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O

let uni = unique(values);
console.log( uni );


//==============================================================================================================

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
	let set = new Set();
	let result = [];
	for (let item of arr) {
		let prop = item.toUpperCase().split('').sort().join('');
		if ( !set.has(prop) ) {
			set.add(prop);
			result.push(item);
		}
	}
	return result;
}

function aclean2(arr) {
	let map = new Map();
	for (let item of arr) {
		map.set((item.toLowerCase().split('').sort().join('')), item);
	}
	return Array.from(map.values());
};

console.log( 'Через MAP', aclean2(arr) );
console.log( 'Через SET', aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"


//==============================================================================================================
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
console.log(keys);

keys.push("more");
console.log(keys);

