const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log('loggedin');
  },
};
function userCreator(name, score) {
  let user = Object.create(userFunctionStore);
  user.name = name;
  user.score = score;
  return user;
}

const user1 = userCreator('Diego', 10);
console.log(user1);
console.log(user1.increment());
console.log(user1);
