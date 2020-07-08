//folk tend to tell coyyArrayAndManipulate as Map

const map = function (array, instruction) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }
  return output;
};

const instruction = (input) => input * 2;

const result = map([1, 2, 3], instruction);

console.log(result);
