function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};

function PaidUserCreator(name, score, balance) {
  UserCreator.call(this, name, score);
  this.balance = balance;
}
PaidUserCreator.prototype = Object.create(UserCreator.prototype);

PaidUserCreator.prototype.incrementBalance = function () {
  this.balance++;
};

const paidUser = new PaidUserCreator('diego', 5, 50);
