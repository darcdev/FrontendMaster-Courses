const literalObject = {};
literalObject.name = 'diego';
literalObject.edad = 5;
literalObject.score = 0;
literalObject.increment = function () {
  this.score++;
};
console.log(literalObject);
