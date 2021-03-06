import React, { Component } from "react";
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
/* Particles */
import Particles from "react-particles-js";
import particlesOptions from "./Settings/particlesOptions";
/* Server IP */
import ServerApi from "./Services/ServerApi";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: [],
      route: "signin",
      isSignedIn: false,

      user: {
        id: "",
        name: "",
        userName: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };

    this.baseState = this.state;
  }

  loadUsers = (user) => {
    const { id, name, user_name, email, entries, joined } = user[0];
    this.setState({
      user: {
        id: id,
        name: name,
        userName: user_name,
        email: email,
        entries: entries,
        joined: joined,
      },
    });
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions;

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

    this.setState({ box: faceBoxes });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onBtnSubmit = () => {
    this.setState(
      {
        imageUrl: this.state.input,
        box: [],
      },
      this.requestApi
    );
  };

  clearState = () => {
    this.setState(this.baseState);
  };

  requestApi = () => {
    fetch(`${ServerApi}/image_url`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.imageUrl,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          fetch(`${ServerApi}/image`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.calculateFaceLocation(response);
      });
  };

  onRouteChange = (route) => {
    if (route === "signin") {
      // this.setState({ isSignedIn: false });
      this.setState(this.baseState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route });
  };

  render() {
    const { isSignedIn, route, box, imageUrl, user } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          actualRoute={route}
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />

        {route === "home" ? (
          <div className="homeContainer">
            <Logo />
            <Rank user={user} />
            <ImageLinkForm
              clearState={this.clearState}
              onInputChange={this.onInputChange}
              onBtnSubmit={this.onBtnSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin
            loadUsers={this.loadUsers}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <Register
            loadUsers={this.loadUsers}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
