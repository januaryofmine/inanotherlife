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

// function commonCharacterCount(s1, s2) {
//   for (var i = 0; i < s1.length; i++) {
//     s2 = s2.replace(s1[i], "!");
//   }
//   return s2.replace(/[^!]/g, "").length;
// }

const s1 = "aabcc";
const s2 = "adcaa";

console.log(commonCharacterCount(s1, s2));
