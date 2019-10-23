import React, { Component } from "react";

export class ContentBox extends Component {
  render() {
    return (
      <div className="ContentBox">
        <img
          className="ContentBox--image"
          src="https://i.ytimg.com/vi/1JLUn2DFW4w/hqdefault.jpg"
          alt=""
        />
      </div>
    );
  }
}

export default ContentBox;
