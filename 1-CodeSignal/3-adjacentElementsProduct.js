// My solution
function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  inputArray.reduce((acc, curr) => {
    if (acc * curr > max) {
      max = acc * curr;
    }
    return curr;
  });
  return max;
}

// Their solution
// function adjacentElementsProduct(arr) {
//   return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
// }

// function adjacentElementsProduct(inputArray) {
//   var prod = inputArray[0] * inputArray[1];

//   for (var i = 1; i < inputArray.length - 1; i++) {
//     prod = Math.max(prod, inputArray[i] * inputArray[i + 1]);
//   }

//   return prod;
// }

const inputArr = [3, 6, -2, -5, 7, 3];

console.log(adjacentElementsProduct(inputArr));
