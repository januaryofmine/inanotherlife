function checkPalindrome(inputString) {
  if (inputString.length == 1) {
    return true;
  }
  let inputStringArr = inputString.split("");
  if (inputString.length % 2 == 0) {
    for (let i = 0; i <= inputString.length / 2 - 1; i++) {
      if (inputStringArr[i] != inputStringArr[inputString.length - 1 - i]) {
        return false;
      } else if (i == inputString.length / 2 - 1) {
        return true;
      }
    }
  } else {
    for (let i = 0; i <= Math.floor(inputString.length / 2); i++) {
      if (inputStringArr[i] != inputStringArr[inputString.length - 1 - i]) {
        return false;
      } else if (i == Math.floor(inputString.length / 2)) {
        return true;
      }
    }
  }
}

function checkPalindrome(inputString) {
  return inputString == inputString.split("").reverse().join("");
}

// console.log(checkPalindrome("abba"));
// console.log(checkPalindrome("acba"));
// console.log(checkPalindrome("abcba"));
// console.log(checkPalindrome("accba"));
