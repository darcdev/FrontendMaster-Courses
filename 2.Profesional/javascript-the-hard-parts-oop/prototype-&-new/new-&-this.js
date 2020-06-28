function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}
UserCreator.prototype.increment = function () {
  this.score++;
};
UserCreator.prototype.loggin = function () {
  console.log('loggedin');
};

const user1 = new userCreator('Diego', 10);
console.log(user1);
console.log(user1.increment());
console.log(user1);
