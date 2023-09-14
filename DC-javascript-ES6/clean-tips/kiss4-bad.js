// 💩
class LoginView {
  display() {
    // display view..
  }

  onLoginButtonClick() {
    fetch("https://server.com")
      .then((data) => data.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("TOKEN", data.token);
          // // update UI elements
        } else {
          // ...
        }
      })
      .catch((error) => {
        if (error.statusCode === 500) {
          // retry fetch?
        } else if (error.statusCode === 400) {
          // handle an error
        }
        // show error message
      });
  }
}
