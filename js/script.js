"use strict"

//-----------------------------------------------------------------------------------------------------------------
function firstToUpperCase(string) {
	return string[0].toUpperCase() + string.slice(1);
};

console.log(firstToUpperCase('дирижабль'));
console.log(firstToUpperCase('гваделупа'));
console.log(firstToUpperCase('почтовая 22а'));

//-----------------------------------------------------------------------------------------------------------------
function checkSpam(string) {
	if (string.toLowerCase().includes('porn') || string.toLowerCase().includes('drugs')) {
		return true;
	};
	return false;
};


console.log(checkSpam('free porn'));
console.log(checkSpam('frEE pORN'));
console.log(checkSpam('продам гараж'));
console.log(checkSpam('buy drugs'));
console.log(checkSpam('summer holidays'));
console.log(checkSpam('learn javascript online'));

//-----------------------------------------------------------------------------------------------------------------
function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, (maxlength-1)) + `\u{2026}`;
	};
	return str;
};

console.log(truncate('Добрый день!', 5));
console.log(truncate('Бомба!', 10));

//-----------------------------------------------------------------------------------------------------------------
function extractCurrencyValue(str) {
	return parseInt(str.slice(1))
};

console.log(extractCurrencyValue('$120'));
console.log(extractCurrencyValue('Р120'));
console.log(extractCurrencyValue('Э250'));