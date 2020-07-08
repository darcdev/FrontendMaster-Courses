//filter elements by a condition

const filter = function (array, instruction) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (instruction(array[i], i, array) == true) {
      output.push(array[i]);
    }
  }
  return output;
};

const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (
  value,
  index,
  array
) {
  return value % 2 == 0;
});

console.log(result);
