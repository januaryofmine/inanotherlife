// My bad solution
// function almostIncreasingSequence(sequence) {
//   let total = 0;
//   for (let i = 1; i < sequence.length; i++) {
//     // console.log('MAX: ' + Math.max(...sequence.slice(0, i)));
//     // console.log('SEQUENCE: ' + sequence[i]);
//     let max = Math.max(...sequence.slice(0, i));
//     if (sequence[i] <= max) {
//       total += 1;
//     }
//     if (total == 1) {
//       sequence.splice(sequence.indexOf(max), 1);
//       break;
//     }
//   }

//   for (let i = 1; i < sequence.length; i++) {
//     let max = Math.max(...sequence.slice(0, i));
//     if (sequence[i] <= max) {
//       total += 1;
//     }
//     if (total == 2) {
//       return false;
//     }
//   }
//   return true;
// }

// My solution
function almostIncreasingSequence(sequence) {
  let total = 0;
  let removeIndex = [];

  let rsTest1 = true,
    rsTest2 = true;
  let total1 = 0,
    total2 = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] - sequence[i - 1] <= 0) {
      total += 1;
    }
    if (total == 1) {
      removeIndex.push(i);
      removeIndex.push(sequence.indexOf(Math.max(...sequence.slice(0, i))));
      break;
    }
  }

  const sequence1 = [...sequence];
  const sequence2 = [...sequence];

  sequence1.splice(removeIndex[0], 1);
  sequence2.splice(removeIndex[1], 1);
  // Sequence 1 Test
  for (let i = 1; i < sequence1.length; i++) {
    if (sequence1[i] - sequence1[i - 1] <= 0) {
      total1 += 1;
    }
    if (total1 == 1) {
      rsTest1 = false;
    }
  }

  // Sequence 2 Test
  for (let i = 1; i < sequence2.length; i++) {
    if (sequence2[i] - sequence2[i - 1] <= 0) {
      total2 += 1;
    }
    if (total2 == 1) {
      rsTest2 = false;
    }
  }
  return rsTest1 || rsTest2;
}

// Their solution
// function almostIncreasingSequence(seq) {
//   var bad=0
//   for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
//     bad++
//     if(bad>1) return false
//     if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
//   }
//   return true
// }


const sequence = [1, 2, 1, 2];
console.log(almostIncreasingSequence(sequence));
