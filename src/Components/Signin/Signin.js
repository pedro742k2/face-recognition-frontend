import React, { Component } from "react";
import "./Signin.css";
import "./Responsive.css";
import closeBtn from "../../Assets/close.svg";
import ServerApi from "../../Services/ServerApi";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInUser: "",
      signInPwrd: "",
    };
  }

  componentWillUnmount() {
    /* Clear all timeouts before unmount */
    let id = window.setTimeout(function () {}, 0);
    while (id--) {
      window.clearTimeout(id); // Will do nothing if there are no timeouts
    }
  }

  onEmailChange = (event) => {
    this.setState({ signInUser: event.target.value });
  };

  onPwrdChange = (event) => {
    this.setState({ signInPwrd: event.target.value });
  };

  removeErrors = (targetId) => {
    try {
      const item = document.getElementsByClassName(targetId)[0];
      item.classList.remove("active");
    } catch (error) {
      console.warn(error);
    }
  };

  showLoginError = () => {
    const { signInUser, signInPwrd } = this.state;

    if (signInUser !== "" || signInPwrd !== "") {
      const credentialsError = document.getElementsByClassName(
        "error-box credentials"
      )[0];

      credentialsError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box credentials");
      }, 10000);
    }
  };

  onSubmitSigiIn = () => {
    fetch(`${ServerApi}/signin`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        givenUser: this.state.signInUser,
        givenPassword: this.state.signInPwrd,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { isSuccessful, msg } = data;

        if (isSuccessful) {
          this.props.loadUsers(msg);
          this.props.onRouteChange("home");
        } else {
          this.showLoginError();
        }
      });
  };

  checkInputs = () => {
    let goHome = true;
    const { signInUser, signInPwrd } = this.state;

    const userError = document.getElementsByClassName(
      "error-box email-user"
    )[0];
    const pwrdError = document.getElementsByClassName("error-box password")[0];

    let id = window.setTimeout(function () {}, 0);
    while (id--) {
      window.clearTimeout(id); // Will do nothing if there are no timeouts
    }

    if (signInUser.trim() === "") {
      userError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box email-user");
      }, 10000);

      goHome = false;
    } else {
      this.removeErrors("error-box email-user");
    }

    if (signInPwrd.trim() === "") {
      pwrdError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box password");
      }, 10000);

      goHome = false;
    } else {
      this.removeErrors("error-box password");
    }

    goHome ? this.onSubmitSigiIn() : this.removeErrors("error-box credentials");
  };

  checkReturn = (event) => {
    if (event.key === "Enter") {
      this.checkInputs();
    }
  };

  render() {
    return (
      <div className="signin-container">
        <div className="signin-box">
          <h1>Sign In</h1>

          <div className="signin-inputs-div">
            <input
              id="email-input"
              type="text"
              placeholder="Email / Username"
              onChange={this.onEmailChange}
              onKeyDown={this.checkReturn}
            ></input>
            <input
              id="pwrd-input"
              type="password"
              placeholder="Password"
              onChange={this.onPwrdChange}
              onKeyDown={this.checkReturn}
            ></input>
          </div>

          <div className="sign-in-buttons-div">
            <hr className="horizontal-line"></hr>

            <button onClick={this.checkInputs}>Sign In</button>
            <button
              onClick={() => {
                this.props.onRouteChange("register");
              }}
            >
              Don't have an account?
            </button>
          </div>
        </div>

        <div className="errors-container">
          <div className="error-box email-user">
            <p>Email / Username field is empty</p>
            <img
              alt=""
              src={closeBtn}
              className="close"
              onClick={() => {
                const userError = document.getElementsByClassName(
                  "error-box email-user"
                )[0];
                userError.classList.remove("active");
              }}
            ></img>
          </div>

          <div className="error-box password">
            <p>Password field is empty</p>
            <img
              alt="img"
              src={closeBtn}
              className="close"
              onClick={() => {
                const pwrdError = document.getElementsByClassName(
                  "error-box password"
                )[0];
                pwrdError.classList.remove("active");
              }}
            ></img>
          </div>

          <div className="error-box credentials">
            <p>Wrong credentials</p>
            <img
              alt="img"
              src={closeBtn}
              className="close"
              onClick={() => {
                const credentialsError = document.getElementsByClassName(
                  "error-box credentials"
                )[0];
                credentialsError.classList.remove("active");
              }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
