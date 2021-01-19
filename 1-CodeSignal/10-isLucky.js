function isLucky(n) {
  const numArr = n.toString().split("");

  const halfArr = numArr.splice(0, numArr.length / 2);
  return numArr.reduce((acc, curr) => parseInt(acc) + parseInt(curr)) -
    halfArr.reduce((acc, curr) => parseInt(acc) + parseInt(curr)) ==
    0
    ? true
    : false;
}

console.log(isLucky(1230));
