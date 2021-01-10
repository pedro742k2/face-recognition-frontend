import React from "react";
import "./Navigation.css";

const Navigation = ({ actualRoute, onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="sign-btn f3 pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    );
  } else if (actualRoute === "signin") {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="disable sign-btn f3 pa3"
        >
          Sign in
        </p>

        <p
          onClick={() => onRouteChange("register")}
          className="enable sign-btn f3 pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  } else if (actualRoute === "register") {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="enable sign-btn f3 pa3 pointer"
        >
          Sign in
        </p>

        <p
          onClick={() => onRouteChange("register")}
          className="disable sign-btn f3 pa3"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
