import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import BrainSVG from "../../Assets/facial-recognition.svg";

const Logo = () => {
  return (
    <div className="logo-div ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 30 }}>
        <div className="Tilt-inner pa2">
          <img style={{ paddingTop: "5px" }} alt="logo" src={BrainSVG} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
