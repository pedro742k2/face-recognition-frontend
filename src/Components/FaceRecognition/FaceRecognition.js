import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ box, imageUrl }) => {
  if (imageUrl) {
    document.querySelector("#input-image").style.border = "2px solid #4f14f2";
  }
  return (
    <div className="center">
      <div className="absolute">
        <img
          id="input-image"
          className="image"
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
