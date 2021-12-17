import React, { Component } from "react";
import "./Register.css";
import "./Responsive.css";
import closeBtn from "../../Assets/close.svg";
import ServerApi from "../../Services/ServerApi";
import validator from "validator";
import loadingAnimation from "../../Assets/animations/loading-login.json";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerName: "",
      registerUser: "",
      registerEmail: "",
      registerPwrd: "",
      secondPwrd: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ registerName: event.target.value });
  };

  onUserChange = (event) => {
    this.setState({ registerUser: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPwrdChange = (event) => {
    this.setState({ registerPwrd: event.target.value });
  };

  onRepeatPwrdChange = (event) => {
    this.setState({ secondPwrd: event.target.value });
  };

  removeErrors = (targetId) => {
    const item = document.getElementsByClassName(targetId)[0];
    item.classList.remove("active");
  };

  showEmailError = () => {
    this.removeErrors("error-box credentials");

    const emailError = document.getElementsByClassName(
      "error-box invalid-email"
    )[0];

    emailError.classList.add("active");

    setTimeout(() => {
      this.removeErrors("error-box invalid-email");
    }, 10000);
  };

  showRegisterError = () => {
    this.removeErrors("error-box pwrds-not-match");

    const {
      registerName,
      registerUser,
      registerEmail,
      registerPwrd,
      secondPwrd,
    } = this.state;

    if (
      registerName !== "" ||
      registerUser !== "" ||
      registerEmail !== "" ||
      registerPwrd !== "" ||
      secondPwrd !== ""
    ) {
      const credentialsError = document.getElementsByClassName(
        "error-box credentials"
      )[0];

      credentialsError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box credentials");
      }, 10000);
    }
  };

  onSubmitRegister = () => {
    const {
      registerName,
      registerUser,
      registerEmail,
      registerPwrd,
      secondPwrd,
    } = this.state;

    if (validator.isEmail(registerEmail)) {
      this.removeErrors("error-box invalid-email");

      if (registerPwrd === secondPwrd) {
        const element = document.querySelector("#loading-circle-animation");

        console.log("Register Lottie loaded");
        this.props.lottie.loadAnimation({
          container: element, // the dom element that will contain the animation
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: loadingAnimation,
        });

        fetch(`${ServerApi}/register`, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            givenName: registerName,
            givenUser: registerUser,
            givenEmail: registerEmail,
            givenPassword: registerPwrd,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            const { isSuccessful, user } = data;

            if (isSuccessful) {
              this.props.loadUsers(user);
              this.props.onRouteChange("home");
            } else {
              this.showRegisterError();
            }
          })
          .catch((error) =>
            alert(`Server error...\nTry again later\n\nError: ${error}`)
          )
          .finally(() => {
            this.props.lottie.destroy();
          });
      } else {
        const notMatchPwrds = document.getElementsByClassName(
          "error-box pwrds-not-match"
        )[0];

        notMatchPwrds.classList.add("active");

        setTimeout(() => {
          this.removeErrors("error-box pwrds-not-match");
        }, 10000);
      }
    } else {
      this.showEmailError();
    }
  };

  checkInputs = () => {
    let goHome = true;
    const {
      registerName,
      registerUser,
      registerEmail,
      registerPwrd,
      secondPwrd,
    } = this.state;

    const nameError = document.getElementsByClassName("error-box name")[0];
    const userError = document.getElementsByClassName("error-box user")[0];
    const emailError = document.getElementsByClassName("error-box email")[0];
    const pwrdError = document.getElementsByClassName("error-box password")[0];
    const repeatPwrdError = document.getElementsByClassName(
      "error-box repeat-password"
    )[0];

    let id = window.setTimeout(function () {}, 0);
    while (id--) {
      window.clearTimeout(id); // Will do nothing if there are no timeouts
    }

    if (registerName.trim() === "") {
      nameError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box name");
      }, 10000);

      goHome = false;
    } else {
      this.removeErrors("error-box name");
    }

    if (registerUser.trim() === "") {
      userError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box user");
      }, 10000);

      goHome = false;
    } else {
      this.removeErrors("error-box user");
    }

    if (registerEmail.trim() === "") {
      emailError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box email");
      }, 10000);

      goHome = false;
    } else {
      this.removeErrors("error-box email");
    }

    if (registerPwrd.trim() === "") {
      pwrdError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box password");
      }, 10000);

      goHome = false;
    } else {
      this.removeErrors("error-box password");
    }

    if (secondPwrd.trim() === "") {
      repeatPwrdError.classList.add("active");

      setTimeout(() => {
        this.removeErrors("error-box repeat-password");
      }, 10000);

      goHome = false;
    } else {
      this.removeErrors("error-box repeat-password");
    }

    if (goHome) {
      this.onSubmitRegister();
    } else {
      this.removeErrors("error-box credentials");
      this.removeErrors("error-box pwrds-not-match");
    }
  };

  render() {
    return (
      <div className="register-container">
        <div className="register-box">
          <h1>Register</h1>

          <div className="register-inputs-div">
            <input
              onChange={this.onNameChange}
              id="name-input"
              type="text"
              placeholder="Full name "
            ></input>
            <input
              onChange={this.onUserChange}
              id="user-input"
              type="text"
              placeholder="Username"
            ></input>
            <input
              onChange={this.onEmailChange}
              id="email-input"
              type="email"
              placeholder="Email"
            ></input>
            <input
              onChange={this.onPwrdChange}
              id="pwrd-input"
              type="password"
              placeholder="Password"
            ></input>
            <input
              onChange={this.onRepeatPwrdChange}
              id="repeat-pwrd-input"
              type="password"
              placeholder="Repeat password"
            ></input>
          </div>

          <div className="register-buttons-div">
            <hr className="horizontal-line"></hr>
            <button onClick={this.checkInputs}>Register</button>
            <button
              onClick={() => {
                this.props.onRouteChange("signin");
              }}
            >
              I already have an account
            </button>
          </div>
        </div>
        <div id="loading-circle-animation"></div>

        <div className="errors-container">
          <div className="error-box name">
            <p>Full name field is empty</p>
            <img
              alt=""
              src={closeBtn}
              className="close"
              onClick={() => {
                const nameError =
                  document.getElementsByClassName("error-box name")[0];
                nameError.classList.remove("active");
              }}
            ></img>
          </div>

          <div className="error-box user">
            <p>Username field is empty</p>
            <img
              alt=""
              src={closeBtn}
              className="close"
              onClick={() => {
                const userError =
                  document.getElementsByClassName("error-box user")[0];
                userError.classList.remove("active");
              }}
            ></img>
          </div>

          <div className="error-box email">
            <p>Email field is empty</p>
            <img
              alt=""
              src={closeBtn}
              className="close"
              onClick={() => {
                const emailError =
                  document.getElementsByClassName("error-box email")[0];
                emailError.classList.remove("active");
              }}
            ></img>
          </div>

          <div className="error-box password">
            <p>Password field is empty</p>
            <img
              alt=""
              src={closeBtn}
              className="close"
              onClick={() => {
                const pwrdError =
                  document.getElementsByClassName("error-box password")[0];
                pwrdError.classList.remove("active");
              }}
            ></img>
          </div>

          <div className="error-box repeat-password">
            <p>Repeat password field is empty</p>
            <img
              alt=""
              src={closeBtn}
              className="close"
              onClick={() => {
                const repeatPwrdError = document.getElementsByClassName(
                  "error-box repeat-password"
                )[0];
                repeatPwrdError.classList.remove("active");
              }}
            ></img>
          </div>

          <div className="error-box pwrds-not-match">
            <p>Given passwords don't match each other</p>
            <img
              alt=""
              src={closeBtn}
              className="close"
              onClick={() => {
                const notMatchPwrd = document.getElementsByClassName(
                  "error-box pwrds-not-match"
                )[0];
                notMatchPwrd.classList.remove("active");
              }}
            ></img>
          </div>

          <div className="error-box credentials">
            <p>Looks like you already have an account</p>
            <img
              alt=""
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

          <div className="error-box invalid-email">
            <p>Invalid Email</p>
            <img
              alt=""
              src={closeBtn}
              className="close"
              onClick={() => {
                const invalidEmail = document.getElementsByClassName(
                  "error-box invalid-email"
                )[0];
                invalidEmail.classList.remove("active");
              }}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
