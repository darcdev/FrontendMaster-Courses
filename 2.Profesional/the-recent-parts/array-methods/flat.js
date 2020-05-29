/*** Flat Methods ***/
//flat -> aplanar

var nestedValues = [1, [2, 3], [[]], [4, [5], 6]];

// array.flat(level to flat)
nestedValues.flat(0);
nestedValues.flat(/* default : 1*/);
nestedValues.flat(2);

[1, 2, 3]
  .map(function tuples(v) {
    return [v * 2, String(v * 2)];
  })
  [
    // [ [2 , "2"] , [4, "4"] , [6 , "6"]]
    (1, 2, 3)
  ].map(function tuples(v) {
    return [v * 2, String(v * 2)];
  })
  .flat()
  [
    // [2,"2" ,4 , "4" , 6 , "6"]

    //map & flat at time
    (1, 2, 3)
  ].flatMap(function all(v) {
    return [v * 2, String(v * 2)];
  });
// [2,"2" ,4 , "4" , 6 , "6"]
