//reduce two values to one

const reduce = function (array, instruction, initialValue) {
  let total = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (!initialValue && i == 0) {
      total = 0;
    }
    total = instruction(array[i], total);
  }
  return total;
};

const result = reduce(
  [1, 2, 3, 4, 5, 6, 7, 8],
  function (value, total) {
    return total + value;
  },
  0
);

console.log(result);
