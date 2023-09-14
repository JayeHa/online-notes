// ✨
function greetings(user) {
  return `Hi ${user.fullName()}`;
}

function goodbye(user) {
  return `See you next time ${user.fullName()} 👋`;
}

class User {
  // e.g. John Jackson
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
