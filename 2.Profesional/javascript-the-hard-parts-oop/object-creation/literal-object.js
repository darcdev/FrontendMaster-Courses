const literalObject = {
  name: 'diego',
  edad: 5,
  score: 0,
  increment: function () {
    this.score++;
  },
};

console.log(literalObject);
