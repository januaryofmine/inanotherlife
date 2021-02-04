// function reverseInParentheses(inputString) {
//   const keyArr = [];
//   let isValidToAdd = true;

//   inputString.split("").forEach((string, i) => {
//     if (string == "(" ) {
//       keyArr.push({ key: "(", i });
//     } else if (string == ")") {
//       keyArr.push({ key: ")", i });
//     } else if (isValidToAdd) {
//         keyArr.push(string)
//     }
//   });
//   return keyArr;
// }

// class Stack {
//     constructor(){
//         this.data = [];
//         this.top = 0;
//     }
//     push(element) {
//       this.data[this.top] = element;
//       this.top = this.top + 1;
//     }
//    length() {
//       return this.top;
//    }
//    peek() {
//       return this.data[this.top-1];
//    }
//    isEmpty() {
//      return this.top === 0;
//    }
//    pop() {
//     if( this.isEmpty() === false ) {
//        this.top = this.top -1;
//        return this.data.pop(); // removes the last element
//      }
//    }
//    print() {
//       var top = this.top - 1; // because top points to index where new    element to be inserted
//       while(top >= 0) { // print upto 0th index
//           console.log(this.data[top]);
//            top--;
//        }
//     }
//     reverse() {
//        this._reverse(this.top - 1 );
//     }
//     _reverse(index) {
//        if(index != 0) {
//           this._reverse(index-1);
//        }
//        console.log(this.data[index]);
//     }
// }

// function reverseInParentheses(s) {
//   while (true) {
//     let c = s.indexOf(")");

//     if (c === -1) {
//       break;
//     }
//     let o = s.substring(0, c).lastIndexOf("(");

//     let start = s.substring(0, o);
//     let middle = s
//       .substring(o + 1, c)
//       .split("")
//       .reverse()
//       .join("");
//     let end = s.substring(c + 1, s.length);

//     s = start + middle + end;
//   }

//   return s;
// }

function reverseInParentheses(s) {
  while (true) {
    const closedIndex = s.indexOf(")");

    if (closedIndex === -1) {
      break;
    }

    const openIndex = s.substring(0, closedIndex).lastIndexOf("(");

    const start = s.substring(0, openIndex);
    const middle = s
      .substring(openIndex + 1, closedIndex)
      .split("")
      .reverse("")
      .join("");
    const end = s.substring(closedIndex + 1, s.length);

    s = start + middle + end;
  }
  return s;
}

function reverseInParentheses(s) {
  while (true) {
    const closeIndex = s.indexOf(")");

    if (closeIndex === -1) {
      break;
    }

    const openIndex = s.substring(0, closeIndex).lastIndexOf("(");

    const start = s.substring(0, openIndex);

    const middle = s.substring(openIndex + 1, closeIndex).split("").reverse("").join("")
    const end = s.substring(closeIndex + 1, s.length);
    s = start + middle + end;
  }
  return s;
}
const inputString = "foo(bar(baz))blim";
console.log(reverseInParentheses(inputString));
