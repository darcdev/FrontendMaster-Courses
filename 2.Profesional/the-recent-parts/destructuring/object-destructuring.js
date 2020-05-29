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

// ({a: first, b: second} = data()); --> distinguish to block
tmp = {a: first, b: second} = data(); // assign to a variable the whole object and destructuring too

//default assignment

// tmp = {a: a, b: b} = data()
var {a, b} = data() || {};
//or
var {a = 42, b} = data() || {};

//nested destructuring

function data() {
  return {
    a: 3,
    b: {
      c: 5,
      d: 6,
    },
  };
}

var {a, b: {c, d} = {}} = data() || {};
