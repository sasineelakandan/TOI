// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

let operations=["5","2","C","D","+"]
let stack = [];

  for (let i = 0; i < operations.length; i++) {
    let char = operations[i];
    switch (char) {
      case "C":
        stack.pop();
        break;
      case "+":
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        break;
      case "D":
        stack.push(stack[stack.length - 1] * 2);
        break;
      default:
        stack.push(Number(char));
    }
  }

  let total = 0;
  for (let number of stack) total += number;

  return total;