/**** Array  Destructuring ****/

function getData() {
  return [1, 2, 3, 4];
}
var [first, second, third, ...last] = getData() || [];

console.log(first, second, third);

function getData2() {
  return [1, [2, 3], 4];
}

var [first, [second, third] = [], fourth];

// parameters

function dataParam([first, second, third, ...last] = []) {
  console.log(first, second, third, last);
}
dataParam([1, 2, 3, 4]);
