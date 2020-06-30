const obj = {
  score: 3,
  increment: function () {
    this.score++;
  },
};
const otherObj = {
  score: 5,
};

obj.increment.call(otherObj);

console.log(otherObj);
