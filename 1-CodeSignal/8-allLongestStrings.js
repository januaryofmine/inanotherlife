// function allLongestStrings(inputArray) {
//   inputArray.reduce(
//     (acc, value, i) => {
//       console.log(i);
//       console.log(acc);
//       console.log(value);
//       i == 0
//         ? acc
//         : value.length > acc[0].length
//         ? [value]
//         : value.length == acc[0].length
//         ? [...acc, value]
//         : acc;
//       console.log(acc);
//     },
//     [inputArray[0]]
//   );
// }

function allLongestStrings(inputArray) {
  let rsArr = [];
  inputArray.forEach((string, i) => {
    if (i == 0) {
      rsArr.push(string);
    } else if (string.length > rsArr[0].length) {
      rsArr = [];
      rsArr.push(string);
    } else if (string.length == rsArr[0].length) {
      rsArr.push(string);
    }
  });
  return rsArr;
}

function allLongestStrings(inputArray) {
  "use strict";
  let maxSize = Math.max(...inputArray.map((x) => x.length));
  return inputArray.filter((x) => x.length === maxSize);
}

const inputArray = ["aba", "aa", "ad", "vcd", "aba"];

console.log(allLongestStrings(inputArray));
