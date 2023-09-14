class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      return this.userClient
        .login(id, password) //
        .then((data) => (this.isLogedIn = true));
    }
  }
}

module.exports = UserService;
