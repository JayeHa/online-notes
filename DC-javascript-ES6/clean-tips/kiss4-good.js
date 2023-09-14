// ✨
class LoginView {
  constructor(userPresenter) {
    this.userPresenter = userPresenter;
  }
  display() {
    // display view...
  }

  onLoginButtonClick() {
    this.userPresenter
      .login() //
      .then((result) => {
        // update text UI element with result.displayMessage
        // update button UI element with result.buttonText
      });
  }
}

//userPresenter라는 별도의 클래스를 이용해서 비지니스 로직 처리
class UserPresenter {
  userServie;
  login() {
    this.userSErvice
      .login() //
      .then((result) => {
        if (result.success) {
          localStorage.setItem("TOKEN", result.token);
          return {
            displayMessage: result.message,
            buttonText: "GO Home",
          };
        } else {
          return {
            displayMessage: "Unable to login",
            buttonText: "Ok",
          };
        }
      })
      .catch((error) => {
        // Something really went wrong!
      });
  }
}
