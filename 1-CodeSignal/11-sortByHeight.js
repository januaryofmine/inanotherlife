// function sortByHeight(a) {
//   const treeArr = [];
//   for (let i = a.length - 1; i >= 0; i--) {
//     if (a[i] == -1) {
//       treeArr.push(i);
//       a.splice(i, 1);
//     }
//   }
//   a.sort((x, y) => x - y > 0);
//   treeArr
//     .slice()
//     .reverse()
//     .forEach((treeIndex) => {
//       a.splice(treeIndex, 0, -1);
//     });
//   return a;
// }

function sortByHeight(a) {
  var s = a.filter((h) => h > 0).sort((a, b) => a - b);
  return a.map((p) => {
    if (p !== -1) {
      return s.shift();
    }

    return -1;
  });
}

const a = [-1, 150, 190, 170, -1, -1, 160, 180];
console.log(sortByHeight(a));
