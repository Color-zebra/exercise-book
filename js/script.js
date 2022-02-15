"use strict"

//===========================================================================================================

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
