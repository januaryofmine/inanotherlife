function commonCharacterCount(s1, s2) {
  s2 = s2.split("");
  let count = 0;
  for (let i = 0; i < s1.length; i++) {

    if (s2.indexOf(s1[i]) > -1) {
      count++;
      s2.splice(s2.indexOf(s1[i]), 1);
    }
  }
  return count;
}

const s1 = "aabcc";
const s2 = "adcaa";

console.log(commonCharacterCount(s1, s2));
