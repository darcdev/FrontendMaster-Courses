/*** Generators ***/

var obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  },
};

var s = obj[Symbol.iterator]();
console.log(s.next());
console.log(s.next());
console.log(s.next());
console.log(s.next());
console.log(s.next());
