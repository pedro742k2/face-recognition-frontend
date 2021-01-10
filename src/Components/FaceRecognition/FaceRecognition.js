import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2 mb2">
        <img
          id="input-image"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />

        {box.map((face, index) => {
          return (
            <div
              key={index}
              className="bounding-box"
              style={{
                top: face.top_row,
                right: face.right_col,
                bottom: face.bottom_row,
                left: face.left_col,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
