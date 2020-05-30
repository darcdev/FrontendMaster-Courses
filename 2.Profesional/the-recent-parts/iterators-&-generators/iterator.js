/*** Iterators ***/
//imperative iteration
var str = [undefined, "hi"];

for (
  let it = str[Symbol.iterator](), v, result;
  (result = it.next()) && !result.done && (v = result.value || true);

) {
  console.log(v);
}

// direct iterator

var str = "hello";

var it1 = str[Symbol.iterator]();
it1.next(); //{value : "h" , done : false}
it1.next(); //{value : "e" , done : false}
it1.next(); //{value : "l" , done : false}
it1.next(); //{value : "l" , done : false}

//declarative iterators

var str = "hello";
var it = str[Symbol.iterator];

for (let v of it) {
  console.log(v);
}
// "h" "e" "l" "l" "o"

//data structure without iterators

var obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]: function () {
    let keys = Object.keys(this);
    let index = 0;
    return {
      next: () =>
        index < keys.length
          ? {value: this[keys[index++]], done: false}
          : {value: undefined, done: true},
    };
  },
};

console.log([...obj]);

for (let v of obj) {
  console.log(v);
}
