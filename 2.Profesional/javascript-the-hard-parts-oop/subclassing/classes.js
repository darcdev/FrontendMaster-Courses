class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
}
class PaidUserCreator extends UserCreator {
  constructor(name, score, balance) {
    super(this, name, score);
    this.balance = balance;
  }
  incrementBalance() {
    this.balance++;
  }
}

const paidUser = new PaidUserCreator('diego', 5, 50);
