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
