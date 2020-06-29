class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log('login');
  }
}

const user1 = new UserCreator('diego', 5);
user1.increment();
