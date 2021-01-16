// My solution
function makeArrayConsecutive2(statues) {
  let total = 0;
  statues
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      if (curr - acc != 1) {
        total = total + (curr - acc - 1);
      }
      return curr;
    });
  return total;
}

// Their solution
// function makeArrayConsecutive2(sequence) {
//   return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
// }

const statues = [6, 2, 3, 8];
console.log(makeArrayConsecutive2(statues));
