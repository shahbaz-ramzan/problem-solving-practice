// Q1: Swap two numbers without using the third variable

// let a = 5;
// let b = 10;

// function swap(a, b) {
//   a = a + b;
//   b = a - b;
//   a = a - b;
//   console.log("a :", a, "b: ", b);
// }
// swap(a, b);

// Q2: Swap two numbers

// let a = 10;
// let b = 5;

// function swapping(c, d) {
//   let temp = c;
//   c = d;
//   d = temp;
//   console.log("a:", c, "d:", d);
// }
// swapping(a, b);

// Q3: Find missing numbers from the array. (Assume that array is sorted).
// const arr = [100, 103, 105, 106, 109, 112, 113];
//  Output should be as follows. 101, 102, 104, 107, 108, 110, 111

// const arr = [100, 103, 105, 106, 109, 112, 113];

// function findmissing(arr) {
//   let lastElement = arr[arr.length - 1];
//   let missing = [];
//   for (let i = 100; i < lastElement; i++) {
//     if (arr.includes(i)) {
//       //   console.log()
//     } else {
//       missing.push(i);
//     }
//   }
//   return missing;
// }
// let a = findmissing(arr);
// console.log(a);

// Q4: Calculate the occurrence of characters in the array.

// let arr = ["apple", "banana", "cherry"];

// function countCharacters(arr) {
//   let counts = {};

//   for (let i = 0; i < arr.length; i++) {
//     let string = arr[i];

//     for (let j = 0; j < string.length; j++) {
//       let char = string[j];
//       if (counts[char]) {
//         counts[char]++;
//       } else {
//         counts[char] = 1;
//       }
//     }
//   }
//   return counts;
// }

// let a = countCharacters(arr);
// console.log(a);

// Q13:Find the minimum number from the given array

// let arr = [6, 5, 2, 32];

// function findMin(arr) {
//   let minimum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minimum) {
//       minimum = arr[i];
//     }
//   }
//   return minimum;
// }

// let a = findMin(arr);
// console.log(a);

// q14:Find the maximum number from the given array

// let arr = [1, 4, 3, 6, 9, 2];

// function findMax() {
//   let maximum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maximum) {
//       maximum = arr[i];
//     }
//   }
//   return maximum;
// }
// let a = findMax(arr);
// console.log(a);

// Q15: sort the Array

// let arr = ["q", "b", "c", "f", "a", "b"];

// let print = arr.sort();
// console.log(print);

// Q: reverse array

// let array = [, 6, 5, 4, 5, 3, 2, 1];

// let arr = array.reverse();
// console.log(arr);

// let array = ["a", "b", "c", "s", "p", "d", "y", "e", "f", "g", "h", "z"];

// let sorted = array.sort();

// console.log(sorted);

// let reverse = sorted.reverse();
// console.log(reverse);

// let arr = [, 4, 3, 2, 9, 8, 6, 5, 8, 4];

// let result = arr.sort((a, b) => a - b);
// console.log(result);

// let result = arr.sort((a, b) => b - a);
// console.log(result);

//Q 9:  Reverse a given string

// let str = "Hello man how are you";

// let arr = str.split(" ");
// console.log(arr);

// let result = arr.reverse();
// console.log(result);
// let string = result.join(" ");
// console.log(string);

// function f(a, b, c) {
//   m = ["1", "2", "3"];
//   a = 3;
//   b[0] = "x";
//   c.first = false;
// }

// var x = 4;
// var y = ["A", "B", "C"];
// var z = { first: true };
// f(x, y, z);
// console.log(x, y, z);

// (function () {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 2000);
//   setTimeout(() => {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();

// Q1:1. Reverse: Write a function that takes an array and returns a new array with the elements reversed.
// Example Input: [1, 2, 3]
// Expected Output: [3, 2, 1]

// let arr = [1, 2, 3];

// function reversed(arr) {
//   let arr2 = arr.reverse();
//   return arr2;
// }

// let output = reversed(arr);
// console.log(output);

// Q2:Map: Write a function that takes an array of numbers and returns a new array with the numbers squared.
// Example Input: [1, 2, 3]
// Expected Output: [1, 4, 9]

// let arr = [1, 2, 3];

// function squared(arr) {
//   return arr.map((item) => item * item);
// }
// console.log(squared(arr));

// Filter: Write a function that takes an array of numbers and returns a new array with only the numbers greater than 0.
// Example Input: [1, 2, 3, -1, -2, -3]
// Expected Output: [1, 2, 3]

// let arr = [1, 2, 3, -1, -2, -3];

// function greater(arr) {
//   return arr.filter((arr) => {
//     return arr < 0;
//   });
// }

// console.log(arr);

// let arr = [1, 2, 3, -1, -2, -3];

// function findGreater(arr) {
//   return arr.filter((e) => {
//     return e > 0;
//   });
// }

// console.log(findGreater(arr));

// Map and Filter: Write a function that takes an array of numbers and returns a new array with only the even numbers squared.
// Example Input: [1, 2, 3, 4, 5, 6]
// Expected Output: [4, 16, 36]

// let arr = [1, 2, 3, 4, 5, 6];

// function findEven(arr) {
//   let even = arr.filter((e) => {
//     return e % 2 == 0;
//   });
//   return even.map((e) => e * e);
// }

// console.log(findEven(arr));

// Reduce: Write a function that takes an array of numbers and returns the sum of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6

// let arr = [1, 2, 3];

// function findMultiple(arr) {
//   return arr.reduce(e * e);
// }

// console.log(findMultiple(arr));

// let arr = [1, 2, 3, 4, 5];

// function arrReduce(arr) {
//   return arr.reduce((sum, num) => sum * num);
// }
// console.log(arrReduce(arr));

// Find: Write a function that takes an array of numbers and returns the first number greater than 1.
// Example Input: [1, 2, 3]
// Expected Output: 2

// let arr = [1, 2, 3, 4];

// function greater(arr) {
//   return arr.find((item) => {
//     return item > 1;
//   });
// }

// console.log(greater(arr));

// Reduce: Write a function that takes an array of numbers and returns the product of all the numbers.
// Example Input: [1, 2, 3]
// Expected Output: 6

// let arr = [1, 2, 3, 4, 5];

// function findProduct(arr) {
//   return arr.reduce((num, item) => num * item);
// }

// console.log(findProduct(arr));

// FindIndex: Write a function that takes an array of numbers and returns the index of the first number greater than 1.
// Example Input: [1, 2, 3]
// Expected Output: 1

// let arr = [1, 0, 1, 4, 5];

// function findIndex(arr) {
//   return arr.findIndex((arr) => {
//     return arr > 1;
//   });
// }

// console.log(findIndex(arr));

// Reduce: Write a function that takes an array of numbers and returns the maximum number.
// Example Input: [1, 2, 3]
// Expected Output: 3
// Solve with reduce

// let arr = [1, 2, 3];

// function findMax(arr) {
//   return arr.reduce((num, item) => {
//     return num > item;
//   });
// }

// console.log(findMax(arr));

// 10 FindIndex: Write a function that takes an array of numbers and returns the index of the maximum number.
// Example Input: [1, 2, 3]
// Expected Output: 2

// let arr = [1, 5, 3, 4];

// function findIndex(arr) {
//   let array = arr.sort((a, b) => a - b);
//   let max = array[array.length - 1];
//   return arr.findIndex(array);
// }
// console.log(findIndex())

// Filter: Write a function that takes an array of numbers and returns a new array with only the odd numbers.
// Example Input: [1, 2, 3, 4]
// Expected Output: [1, 3]

// let arr = [1, 2, 3, 4];

// function findOdd(arr) {
//   return arr.filter((item) => {
//     return item % 2 == 1;
//   });
// }

// console.log(findOdd(arr));

// Filter: Write a function that takes an array of numbers and returns a new array with only the even numbers.
// Example Input: [1, 2, 3, 4]
// Expected Output: [2, 4]

// let arr = [1, 2, 3, 4];

// function findEven(arr) {
//   return arr.filter((item) => {
//     return item % 2 == 0;
//   });
// }

// console.log(findEven(arr));

// Map: Write a function that takes an array of numbers and returns a new array with the numbers doubled.
// Example Input: [1, 2, 3]
// Expected Output: [2, 4, 6]

// let arr = [1, 2, 3, 4];

// function makeDouble(arr) {
//   return arr.map((item) => {
//     return item + item;
//   });
// }

// console.log(makeDouble(arr));

// Map: Write a function that takes an array of numbers and returns a new array with the numbers squared.
// Example Input: [1, 2, 3]
// Expected Output: [1, 4, 9]

// let arr = [1, 2, 3];

// function makeMultiple(arr) {
//   return arr.map((item) => {
//     return item * item;
//   });
// }

// console.log(makeMultiple(arr));

// Reverse: Write a function that takes an array and returns a new array with the elements reversed.
// Example Input: [1, 2, 3]
// Expected Output: [3, 2, 1]

// let arr = [1, 2, 3];

// function reversed(arr) {
//   return arr.reverse();
// }

// console.log(reversed(arr));

// Concat: Write a function that takes two arrays and returns a new array that contains all the elements from both arrays.
// Example Input: [1, 2], [3, 4]
// Expected Output: [1, 2, 3, 4]

// let arr = [1, 2];
// let arr2 = [3, 4];

// function concate(arr) {
//   return arr.concat(arr2);
// }

// console.log(concate(arr));

// Find: Write a function that takes an array of objects and returns the first object that has a 'name' property equal to 'John'.
// Example Input: [{name: 'Alice'}, {name: 'John'}, {name: 'Bob'}]
// Expected Output: {name: 'John'}


