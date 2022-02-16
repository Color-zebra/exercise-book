"use strict"

//===========================================================================================================
// 		Объект можно сделать итерируемым, если добавить ему ключ [Symbol.iteration], с значением в виде функции,
// которая в свою очередь возвращает объект, содержащий в себе свойство current: начальное значение, свойство last: конечное значениеб
// и функцию next(), которая описывает как именно "прогонять" каждый цикл итерации, вовращает объект, в котором обязательно должно быть
// свойство done: со значением true или false, которое показывает, нужно ли итерации делать еще один "прогон". В случае если итерация продолжается,
// необходимо выполнить какие-либо действия со счетчиком итерации current, что бы не сделать бесконечный цикл.

let range = {
	from: 1,
	to: 5,
};

range[Symbol.iterator] = function() {
	return {
		current: this.from,
		last: this.to,
		next() {
			if (this.current <= this.last) {
				return {
					done: false,
					value: this.current++,
					};
				} else {
					return {
						done: true,
					};
				}
			},
		};
	};


for (let item of range) {
	console.log(item);
};

let daysOfTheWeek = {
	0: 'monday',
	1: 'tuesday',
	2: 'wednesday',
	3: 'thursday',
	4: 'friday',
	5: 'saturday',
	6: 'sunday',
	length: 7,
	
};
daysOfTheWeek[Symbol.iterator] = function() {
	return {
		current: 0,
		last: this.length,
		next() {
			if (this.current !== this.last) {
				return {
					done: false,
					value: daysOfTheWeek[this.current++],
				}
			} else if (this.current == this.last){
				return {
					done: true,
				}
			};
		},
	};
};

for (let item of daysOfTheWeek) {
	console.log(item)
};

let arr = Array.from(daysOfTheWeek);
console.log(arr);

//===========================================================================================================
// 		Так же для объекта есть и встроенные методы итерации Object.keys(obj), Object.values(obj), Object.entries(obj)
// в отличии от похожих методов в Set и Map, данные методы возвращают реальный массив значений, а не просто итерируют объект.
// Обратить ВНИМАНИЕ, что символьные свойства игнорируюся. Для них слудет использовать либо Object.getOwnPropertySymbols(), либо Reflect.ownKeys(obj).

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function sumSalaries(obj) {
	let result = 0;
	for (let item of Object.values(obj)) {
		result += item;
	}
	return result;
}

function sumSalaries2(obj) {
	return Object.values(obj).reduce((previous, current) => previous + current, 0)
}

console.log( sumSalaries(salaries) ); // 650
console.log( sumSalaries2(salaries) ); // 650


//===========================================================================================================
let user = {
	name: 'John',
	age: 30
};

function count(obj) {
	return Object.keys(obj).length
}
console.log ( count(user) ); // 2