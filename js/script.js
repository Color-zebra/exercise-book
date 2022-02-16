"use strict"

//===========================================================================================================
// 		Деструктурирующее присваивание позволяет нам коротким способом записать элементы массива/свойства объекта в отдельные переменные.
// 		1) Можно задавать значения по умолчанию.
// 		2) При деструктуризации объектов можно перезаписывать текущие свойства в переменные с другим названием (по умолчанию переменная должна соответствовать названию свойства)
// 		3) Умные свойства функции. В некоторые функции необходимо передавать множество свойств. В это случае проблемой становится запомнить их последовательность, для передачи в верно порядке.
// Мы можем передать свойства в виде объекта, с ключами, соответствующими названиям параметров функции. Функция автоматически деструктуризирует объект на переменные.
// Учитывая возможность задавать значения по умолчанию, использование деструктуризирующего присваивания таким образом сильно облегчает использование функций.

let user = {
	name: "John",
	years: 30
};

let {name, years: age, isAdmin = false} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false


//===========================================================================================================
let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};
let empty = {};

function topSalary(salaries) {
	let namesArr = []
	for (let item of Object.entries(salaries)) {
		namesArr.push(item[0]);
	}
	if (!namesArr[0]) return null;
	return namesArr.sort((a, b) => salaries[b] - salaries[a])[0];
};

console.log(topSalary(salaries));
console.log(topSalary(empty));

function topSalary2(obj) {
	let max = 0;
	let maxName = null;
	for (let [name, value] of Object.entries(obj)) {
		if (value >= max) {
			max = value;
			maxName = name;
		};
	};
	return maxName;
}

console.log(topSalary2(salaries));
console.log(topSalary2(empty));
