import React, { Component } from "react";
import "./ImageLinkForm.css";

class ImageLinkForm extends Component {
  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    return (
      <div className="image-link-container">
        <p className="input-title f2">
          We will detect faces on your images. Give it a try!
        </p>

        <div className="link-form">
          <input
            className="input-field f4 pa2 w-70"
            type="text"
            placeholder="Image URL"
            onChange={this.props.onInputChange}
          />
          <button
            className="input-btn w-30 f4 ph3 pv2 dib pointer"
            onClick={this.props.onBtnSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
