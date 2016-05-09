// write a function that takes in three parameters and returns the sum of those three parameters

function sum(a, b, c) {
	return a + b + c;
}

console.log(sum(1, 2, 3));

// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s

function lastCharacter(string) {
	for (var i = string.length-1; i > string.length-2; i--) {
		return string[i];
	}
}

console.log(lastCharacter('hello'));

// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

function cube(number) {
	return (number * number * number);
}

console.log(cube(3));

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

function reverse(string) {
	var reversed = "";
	for (var i = string.length - 1; i > 0; i--) {
		reversed += string[i];
	}
	return reversed;
}

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

function createObject(array1, array2) {
	var object1 = {};
	for (var i = 0; i < array1.length; i++) {
		object1[array1[i]] = array2[i];
	}
	return object1;
}

var arr1 = ['name', 'age', 'location'];
var arr2 = ['billybob', '21', 'mississippi'];

console.log(createObject(arr1, arr2));

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

function splitObject(object) {
	var newObject = { keys: [], values: []};
	for (var prop in object) {
		newObject.keys.push(prop);
		newObject.values.push(object[prop]);
	}
	return newObject;
}

var firstobject = { exciting: "markets", exotic: "britain" };
var secondobject = { a: "x", b: "y", c: "z" }

console.log(splitObject(firstobject));
console.log(splitObject(secondobject));

// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions

function nthpower(x, n) {
	var answer = 1;
	for (var i = 0; i < n; i++) {
		answer *= x;
	}
	return answer;
}

console.log(nthpower(2, 3));

// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.

var seatsdata = [true, true, false, true, true, false, false, false, true];

/*
function chooseSeat(array) {
	var seatIndex = -1;
	var furthestDistance = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] === false) {
			var distance = 0;
			for (var j = 1; j < array.length; j++) {
				if (array[i-j] === false && array[i+j] === false) {
					distance = distance + 2;
				}
				else if (array[i-j] === false || array[i+j] === false) {
					distance++;
				}
			}
			if (distance > furthestDistance) {
				furthestDistance = distance;
				seatIndex = i;
			}
		}
	}
	return seatIndex;
}

console.log(chooseSeat(seats));

*/

function chooseSeat(array) { //position is in array notation
	var biggestLeft = 0;
	var biggestRight = 0;
	var biggestCombo = 0;
	var bestSeat;
	
	for (var i = 0; i < array.length; i++) {
		if (!array[i]) {
			var left = 0;
			var right = 0;
			var combo = left + right;
			for (var j = 1; j < array.length; j++) {
				if (array[i-j] === false) {
					left++;
				}
				if (array[i+j] === false) {
					right++;
				}
			}
			if (combo > biggestCombo) {
				biggestCombo = combo;
				biggestCombo = i;
			}
		}
	}
	return bestSeat;
}

console.log(chooseSeat(seatsdata));













