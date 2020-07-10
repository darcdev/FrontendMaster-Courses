//not mutate data

const array = [1, 2, 3];
const multiplyBy2 = (num) => num * 2;

const result = array.map(multiplyBy2);
const newResult = array.map(multiplyBy2);

console.log(result);
console.log(newResult);
