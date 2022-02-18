"use strict"

//===============================================================================================================================================================================================
// Можно вызывать функцию передавая ей больше параметром чем задумывалось. Раньше все параметры сохранялись в псевдомассив arguments, однако с ним были проблемы
// а именно он не поддерживает методы массивов, и м ы неможем получить часть аргументов, только все. Поэтому появились остаточные параметры ...someName.
// данный оператор собирает все невлезшие параметры в массив. ВНИМАНИЕ он должен стоять в после простых параметров, т.к. указанные после него параметры не принимаются.
// также оператор ... применяется как оператор расширения, что бы можно было передать в аргументы массив
function abc(a, b, ...args) {
	console.log(args.join('') + a + b);
}
abc(1, 2, 3, 'c', 5, 6, 7, 8, 9);
console.log('==================')


// Такую же запись имеет оператор расширения, который разворачивает массив в отдельные элементы. Можно применть в объекте Math, при копировании и при создании массива/объект/чего угодно итерируемого.
let y = [22, 33, 44];

//в объекте Math
console.log(Math.max(1, 2, ...y, 20));


//при копировании
let z = [...y];
y[0] = 0;
console.log(y);
console.log(z);

let a = {
	number: 'five',
	value: 'red'
}
let b = {...a};
a.value = 'green';
console.log(a);
console.log(b);

let q = [...'АРБАТ']; //аналог метод string.split('');
console.log(q);

//при создании массива
let r = [1, 2, 3, ...y, 4, 5];
console.log(r);

