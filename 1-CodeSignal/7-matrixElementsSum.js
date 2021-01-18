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

console.log(matrixElementsSum(matrix));