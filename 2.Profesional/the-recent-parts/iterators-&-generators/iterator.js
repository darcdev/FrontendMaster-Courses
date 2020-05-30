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
