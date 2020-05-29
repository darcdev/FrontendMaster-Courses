/**** Object Destructuring***/

//basic
function data() {
  return {
    a: 3,
    b: 2,
    d: 10,
    f: 9,
  };
}
var {a: first, b: second, c: third = 5, ...rest} = data();
console.log(third);

// if exist variables

function data() {
  return {
    a: 3,
    b: 2,
    d: 10,
    f: 9,
  };
}
var tmp;
var first, second;

tmp = {a: first, b: second} = data();
