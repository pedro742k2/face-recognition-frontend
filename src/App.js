import React, { Component, Fragment } from "react";
/* CSS stylesheet */
import "./App.css";
/* React Components */
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import Modal from "./Components/Modal/Modal";
import Profile from "./Components/Profile/Profile";
import DisableParticles from "./Components/DisableParticles/DisableParticles";
/* Particles */
import Particles from "react-particles-js";
import particlesOptions from "./Settings/particlesOptions";
/* Server IP */
import ServerApi from "./Services/ServerApi";
/* Animation library and assets */
import lottie from "lottie-web";
import loadingAnimation from "./Assets/animations/loading_api.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: [],
      route: "signin",
      isSignedIn: false,
      isLoading: false,
      loadingState: "",
      isProfileOpen: false,

      user: {
        id: "",
        name: "",
        userName: "",
        email: "",
        entries: 0,
        birthday: "",
        avatar_url: "",
        joined: "",
      },
    };

    this.baseState = this.state;
  }

  getUserProfile(id, token) {
    return new Promise((resolve, reject) => {
      fetch(`${ServerApi}/profile/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
          user_id: id,
        },
      })
        .then((res) => res.json())
        .then((user) => resolve(user))
        .catch((error) => reject(error));
    });
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem("token");

    if (token) {
      fetch(`${ServerApi}/signin`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            this.getUserProfile(data.id, token)
              .then((user) => {
                if (user.id) {
                  this.loadUsers(user);
                  this.onRouteChange("home");
                } else {
                  console.warn("Invalid User");
                }
              })
              .catch(console.warn);
          } else {
            console.warn("Invalid Token");
          }
        })
        .catch(console.warn);
    }
  }

  componentDidUpdate() {
    const element = document.querySelector("#link-loading-animation");

    lottie.loadAnimation({
      container: element, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingAnimation,
      rendererSettings: {
        clearCanvas: false,
        id: "loading-animation-id",
      },
    });
  }

  loadUsers = (user) => {
    const {
      id,
      name,
      user_name,
      email,
      entries,
      avatar_url,
      birthday,
      joined,
    } = user;

    this.setState({
      user: {
        id,
        name,
        userName: user_name,
        email,
        entries,
        birthday,
        avatar_url,
        joined,
      },
    });
  };

  calculateFaceLocation = (data) => {
    if (!data.outputs) {
      this.setState({ isLoading: false, loadingState: "" });

      return alert(
        "Something went wrong ...\nCheck if the URL is a valid image"
      );
    }

    const clarifaiFace = data?.outputs[0]?.data.regions;

    const image = document.getElementById("input-image");
    const width = Number(image.width);
    const height = Number(image.height);

    const faceBoxes = clarifaiFace.map((box_obj) => {
      let obj = box_obj.region_info.bounding_box;
      obj.left_col = obj.left_col * width;
      obj.top_row = obj.top_row * height;
      obj.right_col = width - obj.right_col * width;
      obj.bottom_row = height - obj.bottom_row * height;

      return obj;
    });

    this.setState({ box: faceBoxes, isLoading: false, loadingState: "" });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onBtnSubmit = () => {
    const { input } = this.state;
    if (input) {
      this.setState(
        {
          imageUrl: this.state.input,
          box: [],
          isLoading: true,
          loadingState: "Requesting data from API ...",
        },
        this.requestApi
      );
    }
  };

  clearState = () => {
    this.setState(this.baseState);
  };

  requestApi = () => {
    window.scrollTo(0, document.body.scrollHeight);

    const token = window.sessionStorage.getItem("token");
    const { id } = this.state.user;

    fetch(`${ServerApi}/image_url`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        user_id: id,
      },
      body: JSON.stringify({
        input: this.state.imageUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          fetch(`${ServerApi}/image`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
              user_id: id,
            },
            body: JSON.stringify({
              id,
            }),
          })
            .then((response) => {
              if (response.status !== 200) {
                alert("Something went wrong!");
                throw Error;
              }

              return response.json();
            })
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
              this.calculateFaceLocation(data);
            })
            .catch((error) => {
              this.setState({ isLoading: false, loadingState: "" });
              console.log(error);
            });
        }
      })
      .catch(console.error);
  };

  onRouteChange = (route) => {
    if (route === "signin") {
      this.setState(this.baseState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  showMessage = (facesNumber) => {
    window.scrollTo(0, document.body.scrollHeight);

    return <h1 className="info-message">Detected {facesNumber} faces</h1>;
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen,
    }));
  };

  render() {
    const {
      isSignedIn,
      route,
      box,
      imageUrl,
      user,
      isLoading,
      loadingState,
      isProfileOpen,
    } = this.state;

    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          user={user}
          actualRoute={route}
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
          toggleModal={this.toggleModal}
        />
        {isProfileOpen && (
          <Modal>
            <Profile
              toggleModal={this.toggleModal}
              user={user}
              loadUsers={this.loadUsers}
            />
          </Modal>
        )}

        {route === "home" ? (
          <div className="homeContainer">
            <Logo />
            <Rank user={user} />
            <ImageLinkForm
              clearState={this.clearState}
              onInputChange={this.onInputChange}
              onBtnSubmit={this.onBtnSubmit}
            />
            {isLoading ? (
              <div className="loading-message">
                <div id="link-loading-animation"></div>
                <h1 className="info-message">{loadingState}</h1>
              </div>
            ) : null}
            {box.length ? this.showMessage(box.length) : null}
            <FaceRecognition box={box} imageUrl={imageUrl} />

            <DisableParticles />
          </div>
        ) : route === "signin" ? (
          <Fragment>
            <Signin
              lottie={lottie}
              loadUsers={this.loadUsers}
              onRouteChange={this.onRouteChange}
              getUserProfile={this.getUserProfile}
            />
            <DisableParticles />
          </Fragment>
        ) : (
          <Fragment>
            <Register
              lottie={lottie}
              loadUsers={this.loadUsers}
              onRouteChange={this.onRouteChange}
              getUserProfile={this.getUserProfile}
            />
            <DisableParticles />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
