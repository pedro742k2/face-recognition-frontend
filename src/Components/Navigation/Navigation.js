import React from "react";
import ProfileIcon from "../Profile/ProfileIcon";
import "./Navigation.css";

const Navigation = ({
  actualRoute,
  onRouteChange,
  isSignedIn,
  toggleModal,
  user,
}) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <ProfileIcon
          user={user}
          onRouteChange={onRouteChange}
          toggleModal={toggleModal}
          className="f3 pa3 pointer"
        />
      </nav>
    );
  }

  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signin")}
        className={`${
          actualRoute === "signin" ? "disable" : "enable"
        } sign-btn f3 pa3`}
      >
        Sign in
      </p>

      <p
        onClick={() => onRouteChange("register")}
        className={`${
          actualRoute === "signin" ? "enable" : "disable"
        } sign-btn f3 pa3 pointer`}
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;
