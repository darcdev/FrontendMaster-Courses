const objectCreate = Object.create(null);
objectCreate.name = 'diego';
objectCreate.edad = 5;
objectCreate.score = 0;
objectCreate.increment = function () {
  this.score++;
};
console.log(objectCreate);
