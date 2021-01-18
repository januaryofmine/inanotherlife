function matrixElementsSum(matrix) {
  let totalPoint = 0;
  let isValidToAdd = true;
  matrix = matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
  matrix.forEach((row, rowIndex) => {
    isValidToAdd = true;
    row.forEach((el, i) => {
      if (el == 0) {
        isValidToAdd = false;
      } else if (isValidToAdd) {
        totalPoint += el;
      }
    });
  });
  return totalPoint;
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

// function matrixElementsSum(matrix) {
//   for (var r = 0, j = 0; j < matrix[0].length; j++) {
//     for (var i = 0; i < matrix.length; i++) {
//       if (matrix[i][j] === 0) break;
//       else r += matrix[i][j];
//     }
//   }
//   return r;
// }

console.log(matrixElementsSum(matrix));
