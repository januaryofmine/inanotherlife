// 1 5 13 25
// 1 + 4 = 5
// 5 + 8 = 13
// 13 + 12 = 25

// shapeArea(1) : 1
// shapeArea(2) : 1 + 4 * 1
// shapeArea(3) : 1 + 4 * 1 + 4 * 2

// My solution
function shapeArea(n) {
  let area = 1;
  for (let i = 0; i < n; i++) {
    area += 4 * i;
  }
  return area;
}

// Their solution
// function shapeArea(n) {
//   return n*n + (n-1)*(n-1);
// }

// function shapeArea(n) {
//     if(n===1) return 1;
//     return shapeArea(n-1) + 4*(n-1);
// }

// function shapeArea(n) {
//     return n*n + (n-1)*(n-1);
// }

console.log(shapeArea(1))
console.log(shapeArea(2))
console.log(shapeArea(3))
console.log(shapeArea(4))