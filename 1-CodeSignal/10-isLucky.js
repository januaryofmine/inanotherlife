function isLucky(n) {
  const numArr = n.toString().split("");

  const halfArr = numArr.splice(0, numArr.length / 2);
  return numArr.reduce((acc, curr) => parseInt(acc) + parseInt(curr)) -
    halfArr.reduce((acc, curr) => parseInt(acc) + parseInt(curr)) ==
    0
    ? true
    : false;
}

// function isLucky(n) {
//   var count = 0;
//   n = String(n)
//     .split("")
//     .map((t) => {
//       return parseInt(t);
//     });
//   n.forEach((el, i) => {
//     i < n.length / 2 ? (count += el) : (count -= el);
//   });
//   return count == 0;
// }

console.log(isLucky(1230));
