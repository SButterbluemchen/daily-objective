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

// function countChar(word, letter) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   } return count;
// }

// console.log(countChar("LBOOOBBLLLL", "L"));

// Solution 7
// function range(start, end) {
//   const array = [];
//   for (let i = start; i <= end; i++) {
//     array.push(i);
//   } 
//   return array;
// } 

// console.log(range(1,6));

// function sum(numberArray) {
//   let result = 0;
//   for (let i = 0; i < numberArray.length; i++) {
//     result += numberArray[i];
//   }
//   return result;
// }
// console.log(sum([1,2,3]));

// Solution 8
// function reverseArray(myArray) {
//   const newArray = [];
//   for (let i = myArray.length - 1; i >= 0; i--) {
//     newArray.push(myArray[i]);
//   }
//   return newArray;
// } 
// console.log(reverseArray(["A","B","C"]));

// const myArray = ["0","1","2","3","4"];
// function reverseArrayInPlace() {
//   for (let i = 0; i <= myArray.length / 2 ; i++) {
//     const element = myArray[i];
//     myArray[i] = myArray[myArray.length - 1 - i];
//     myArray[myArray.length - 1 - i] = element;
//   }
// }

// reverseArrayInPlace();
// console.log(myArray);

// Solution Josephus problem
function killPrisoner(prisonersTotal, sequence) {
  const prisonersArray = [];
  for (let i = 0; i < prisonersTotal; i++) {
    prisonersArray.push(i);
  }
  console.log(`Mon tableau ${prisonersArray}`);

  let toKill = 0;

  while (prisonersArray.length > 1) {
    toKill = toKill + sequence - 1;
    if (toKill > prisonersArray.length) {
      toKill = toKill - prisonersArray.length;
    }
    console.log(toKill);
    prisonersArray.splice(toKill, 1);
    console.log(`Array after one dead prisoner ${prisonersArray}`);
  }
}

killPrisoner(6,2);
