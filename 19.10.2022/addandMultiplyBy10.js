/*
function add(x, y) {
  return x + y;
}
let output = add();
console.log("addtion", 4 + 5);
*/

function addandMultiplyBy10(x, y) {
  let sum = x + y;
  return MultiplyBy10(sum);
}

function MultiplyBy10(number) {
  return number * 10;
}
let output = parseInt(addandMultiplyBy10(2, 3));
console.log("hey", output);
