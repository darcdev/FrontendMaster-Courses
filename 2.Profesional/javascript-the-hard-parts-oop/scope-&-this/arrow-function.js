function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}
UserCreator.prototype.increment = function () {
  //this -> user#
  const add1 = () => {
    //this -> lexical scope
    this.score++;
    //user#.score++
  };
  add1();
};
UserCreator.prototype.loggin = function () {
  console.log('loggedin');
};

const user1 = new userCreator('Diego', 10);
console.log(user1);
console.log(user1.increment());
console.log(user1);
