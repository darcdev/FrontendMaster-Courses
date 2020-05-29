var arr = [{a: 1}, {a: 2}];

//return the value that satisface the condition
arr.find(function match(v) {
  return v && v.a > 1;
});
// { a : 2}

//if not found any value
arr.find(function match(v) {
  return v && v.a > 10;
});
// undefined

arr.findIndex(function match(v) {
  return v && v.a > 10;
});
// -1
