function userCreator(name, score) {
  const user = {};
  user.name = this.name;
  user.score = this.score;
  user.increment = function () {
    user.score++;
  };
  return user;
}

const user1 = userCreator('Diego', 10);
console.log(user1);
