// Solution 1
// let hashtag = "";
// let number = "#######";

// for (let i = 1; i <= number.length; i++) {
//   hashtag += "#";
//   console.log(hashtag);
// }

// Solution 2
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // // Solution 3
// let board = "";
// let number = 8;

// for (let i = 0; i < number; i++) {
//   for (let j= 0; j < number; j++){
//   if ((i+j) % 2 == 0) {
//     board += " ";
//   } else {
//     board += "#";
//   }
// }
//   board += "\n";
// }
// console.log(board);

// // Solution 4
// function minValue(arg1, arg2) {
//   console.log(Math.min(arg1, arg2));
// }
// minValue(5,-10);

// // Solution 5
// function isEven(n) {
//   if (Number.isInteger(n) && n >= 0) {
//   if (n == 0) {
//     return true;
//   } else if (n == 1) {
//     return false;
//   } else {
//     console.log("appel isEven" + (n-2));
//     return isEven(n - 2);
//   }
// } else {
//   console.log("You must enter a positive integer");
// }
// }
// console.log(isEven(70));

// Solution 6 
// function countBs(arg1) {
//   return arg1.match(/B/g).length;
//   }

//   console.log(countBs("BoBB"));

// let count = 0;
// function countChar(arg3, arg4) {
//   for (let i = 0; i < arg3.length; i++) {
//     if (arg3[i] == arg4) {
//       count++;
//     }
//   } return count;
// }

// countChar("LBOOOBBLLLL", "L");

// Solution 7
let array = [];
function range(start, end) {
  for (let i = start; i <= end; start++) {
    array.push(i);
  } 
  return array;
} 

console.log(range(1,6));