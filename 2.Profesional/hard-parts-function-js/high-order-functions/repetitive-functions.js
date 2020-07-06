//NOT apply the DRY principle

const copyArrayAndMultiplyBy2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
};

const copyArrayAndDivideBy2 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }
  return output;
};
