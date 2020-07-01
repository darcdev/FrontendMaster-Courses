//Solution 2

function UserCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

userFunctions = {
  sayName: function () {
    console.log('Im ' + this.name);
  },
  increment: function () {
    this.score++;
  },
};

const user1 = UserCreator('will', 5);
user1.sayName();

function PaidUserCreator(paidName, paidScore, accountBalance) {
  const newPaidUser = new UserCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

Object.setPrototypeOf(paidUserFunctions, userFunctions);

paidUserFunctions = {
  incrementBalance: function () {
    this.accountBalance++;
  },
};

const paidUser1 = PaidUserCreator('diego', 10, 500);
