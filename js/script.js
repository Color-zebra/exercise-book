"use strict"

//=============================================================================================================================================================================================
//Date это объект, представляющий дату и время. Счет месяцев и дней недели начинается с нуля (январь и воскресенье). Приведение даты к числу вовращает timestamp.
//Таймстамп это количество миллисекунд начиная с 1 января 1970г до конкретной даты. Считается в обе стороны (можно передать отрицательное значение).
//Из Date можно получить любую ее часть (день/месяц/секунду и т.д с помощью метода) .getSomething().
//Если после get написать UTC, получим составляющую в нулевом часовом поясе, если не писать, то в текущем.
//Так же дату можно изменить методом .setSomething(), если значение составляющей перевалит за максимум, то произойдет автоисправление (перенос излишков на разряд выше).
//Что бы выхватить таймстамп нынешнего момента лучше использовать Date.now().



//===========================================TASKS=============================================================================================================================================
let Feb20_2012 = new Date('2012-02-20T03:12');
console.log(Feb20_2012);


//=============================================================================================================================================================================================
function getWeekDay(date) {
	let arr = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',]
	return arr[date.getDay()];
	};
console.log(getWeekDay(Feb20_2012));


//первый вариант явно лучше, а это просто что бы повторить редкий условный оператор
function getWeekDayAn(date) {
	console.log(date.getDay())
	switch (date.getDay()) {
		case 0: return 'ВС';
		break;
		case 1: return 'ПН';
		break;
		case 2: return 'ВТ';
		break;
		case 3: return 'СР';
		break;
		case 4: return 'ЧТ';
		break;
		case 5: return 'ПТ';
		break;
		case 6: return 'СБ';
		break;
	};
};
console.log(getWeekDayAn(Feb20_2012));


//=============================================================================================================================================================================================
function getLocalDay(date) {
	return date.getDay() === 0 ? 7 : date.getDay();
}
console.log(getLocalDay(new Date(2012, 0, 3)));


//=============================================================================================================================================================================================
function getDateAgo(date, days) {
	let date1 = new Date(date);
	date1.setDate(date.getDate() - days);
	return date1.getDate();
}

let currentDate = new Date(2015, 0, 2);
console.log( getDateAgo(currentDate, 1)); // 1, (1 Jan 2015)
console.log( getDateAgo(currentDate, 2)); // 31, (31 Dec 2014)
console.log( getDateAgo(currentDate, 365)); // 2, (2 Jan 2014)


//=============================================================================================================================================================================================
function getLastDayOfMonthMy(year, month) {
	let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let arr2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	return !(year % 4) ? arr2[month] : arr[month];
	};

function getLastDayOfMonth(year, month) { 
		let date = new Date(year, month+1, 0);
		return date.getDate();
		}; 
//фишка этой функции в том что нумерация дней месяца начинается не с нуля, а с еденицы, и если мы в колчество дней месяца укажем 0, это будет означать "день накануне"

console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 1));


//=============================================================================================================================================================================================
function getSecondsToday() {
	let date = new Date();
	return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());


//=============================================================================================================================================================================================
function getSecondsToTomorrow() {
	let date = new Date();
	return 86400 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
}

console.log(getSecondsToTomorrow());

function getSecondsToTomorrow2() {
	let date = new Date();
	let nextDay = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + 1));
	return Math.round((nextDay - date)/1000);
}

console.log(getSecondsToTomorrow2());


//=============================================================================================================================================================================================
function formatDate(date) {
	if ((Date.now() - date) < 1000) {
		return 'прямо сейчас'
	} else if ((Date.now() - date) < 60000) {
		return `${((Date.now() - date) / 1000)} сек. назад`
	} else if ((Date.now() - date) < 3600000) {
		return `${((Date.now() - date) / 60000)} мин. назад`
	} return (
				(`0` + date.getDate()).slice(-2) + '.' +
				(`0` + (date.getMonth() + 1)).slice(-2) + '.' +
				(`0` + date.getFullYear()).slice(-2) + ' ' +
				date.getHours() + ':' + date.getMinutes()
			);
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) );// вчерашняя дата в формате "31.12.16 20:00"